# OBJECT

- Destructuring
- Spread
- Tthis
- New Date()

```
 Объект — это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем.
 Значением свойства может быть функция, которую можно назвать методом объекта.

```

<h1 align='center'>
<img width="350" src="./car.png">
</h1>

<pre>

   let car = {
    model: 'Range Rover'б
    color: 'Red',
   }

</pre>

> car - name object

> color - key

> red - value

<h1 align ="center" >
 Methods object :
</h1>

# Object.keys()

![](./keys.png)

# Object.values()

![](./values.png)

# Object.entries()

## ![](./entries.png)

---

<h1 align="center"> Destructing & Spread : </h1>

## Destructing:

![](./destructing.png)

## Spread:

## ![](./clone.png)

---

<h1 align="center">THIS :</h1>

> keyword this - ключевое слово this

![](./this.png)

---

<h1 align = "center">
DATA AND TIME :
</h1>

> Встречайте новый встроенный объект: Date. Он содержит дату и время, а также предоставляет методы управления ими.
> Например, его можно использовать для хранения времени создания/изменения, для измерения времени или просто для вывода текущей даты.

- Создание

> Для создания нового объекта Date нужно вызвать конструктор
> new Date() с одним из следующих аргументов:

![](./now.png)

```
Если внутри new Date( ) добавить параметр объект начинает считать с 1 января 1970г UTC +
```

<h2 align="center"> Date and Time: </h2>

# new Date( year, month, day, hours, minutes, second, millisecond )
