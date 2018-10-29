function incrementString (strng) {
  // return incrementedString
}

Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");


foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Ваша задача - написать функцию, которая увеличивает строку, чтобы создать новую строку.
Если строка уже заканчивается номером, номер должен быть увеличен на 1.
Если строка не заканчивается номером, номер 1 должен быть добавлен к новой строке.
