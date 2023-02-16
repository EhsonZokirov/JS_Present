# Function declaration

> Функция объявляется с использованием ключевого слова function

## Синтаксис:

<pre>

function declaration(a,b) {
 return a + b;
}

console.log(declaration(1,1)) // 2

 По умолчанию функции возвращают [undefined]. 
 Чтобы вернуть другое значение, функция должна содержать инструкцию [return], которая указывает, какое значение возвращать.
</pre>

## Поднимание объявленной функции:

> Объявление функции в JavaScript поднимает определение функции.
> Вы можете использовать функцию до того, как вы её объявили:

<pre>

hoisted(); // выводит "foo"

function hoisted() {
  console.log("foo");
}


</pre>

---

---

---

# Function – Expression

> Ключевое слово function может использоваться для определения функции внутри выражения.

## Arrow function:

<pre>

const arrow = (a,b) => {
    return a * b;
}

console.log(arrow(2,2)) // 4

</pre>

## Anonymous function:

<pre>

const anonymous = function (a,b) {
    return a + b;
}

console.log(anonymous(5,5))  // 10

</pre>

---

---

---

# IIFE - Немедленно-Вызовающая функция

> IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

## Примеры:

> Функция становится мгновенно выполняющимся функциональным выражением. Переменные внутри функции не могут быть использованы за пределами её области видимости.

<pre>

(()=> {
    let cnt = 0;
    return  cnt += 1;
})();
 

</pre>

---

---

---

# Scope – Lexical Scope

> Лексическая область — это область, которая определена
> во время лексинга. Иными словами, лексический
> область действия основана на том, где переменные
> и блоки области действия созданы
> вы, во время записи, и, таким образом,
> (в основном) установленный в камне к тому времени, когда лексер
> обрабатывает ваше сотрудничество

## Примеры:

<pre>
function foo(a){
    var b = a*2
        function bar(c) {
            console.log(a,b,c);
        }
    
    bar( b * 3 )
}

foo(2) // 2, 4, 12
</pre>

---

---

---

# Hoisting - Variable

<pre>

a = 2;  // получает по умолчанию переменную var 
console.log(a) // 2

console.log(a)  // ReferenceError
 a = 2;

console.log(a)  // undefined
var a = 2; // Hoisting

</pre>
