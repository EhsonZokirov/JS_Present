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
Вы можете использовать функцию до того, как вы её объявили:

<pre>

hoisted(); // выводит "foo"

function hoisted() {
  console.log("foo");
}


</pre>
-----
-----
-----
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