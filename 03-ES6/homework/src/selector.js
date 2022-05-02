var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

/*   if (typeof startEl === "undefined") {
    startEl = document.body;
  } ESTA LINEA DE CODIGO PUEDE SER REEMPLAZADA, SETEANDO LOS VALORES EN DEFAULT, ES DECUIR, SI NO HAY UN START EL, UTILIZO DOCUMENT. BODY
 */

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)
  //en caso de que el elemeto sea igual al startEL, pushealo al array de resultados.
  for(let i=0; i< startEl.children.length; i++){
    //startEl.children es el arreglo de los elementos que hay en body, ya que era el primero. si no fuese body el primero, peude ser cualquier elemento, y luego tiene subhijos, los que son recorridos por esta funcion.
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...result]
    //aca le dice a result set, que va a ser igual a todo lo que haya en resutl set, concatenado con todo lo que haya en result.
  }

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] ==='#'){return 'id'};
  if (selector[0] ==='.') {return 'class'};
  if(selector.includes ('.')) {return 'tag.class'}
  else return 'tag';
  
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el){
     return '#'+el.id === selector //le da para que devuelva una comparacion. esta comparacion devuelve true o false, por lo que no hay que poner un if.
     //ahi esta preguntando en el arbol dom, si el elemento.id es = al selector que le pasamos.
   }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      for(let i =0; i<el.classList.length; i++){
        if ('.' + el.classList[i] === selector)return true
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      
      let [t, c] = selector.split('.') // haciendo esto, me va a quedar un arreglo con dos elementos, el tag y el class [tag, class]
      //hace destructuring, es decir, reasigna los valores de lo que le dio, asi, cuando quiere llamar al tag (porque no sabe todavia que es), 
      //accede mediante lo que ya le asigno, mediante la t. lo msimo para la parte del class del arreglo. t = tag; c = class;
      return matchFunctionMaker(t)(el) && matchFunctionMaker('.'+c)(el); // aplica la recursion, reutilizando las funciones que ya estaban de tag y class respectivamente.
      //como la funciuno matchFunctionMaker devuelve una funcion matchFunction, vuelve a correr la funcion, retornando truw o false, segun coresponda para t y c.
      //si ambas son T entonces, devuelve true. si alguna es F, devuelve False;
      }
  
  } else if (selectorType === "tag") {
    matchFunction = function(el){
      return el.tagName === selector.toUpperCase();
      //cuando la funcion document.getElement devuelve un valor para tags, lo devuelve en mayuscula. entonces le hago uppercase al selector para que chequeen si son iguales.
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
