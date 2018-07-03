### Редактор маршрутов 

[![Maintainability](https://api.codeclimate.com/v1/badges/28994650638c321ed7e0/maintainability)](https://codeclimate.com/github/koshkarik/funbox-test-map/maintainability) [![Build Status](https://travis-ci.org/koshkarik/funbox-test-map.svg?branch=master)](https://travis-ci.org/koshkarik/funbox-test-map)  

Live - http://roasted-coat.surge.sh/

### Level 1  
1. **Хорошее приложение**  
  *Пользователь* - внешний вид приложения и логичная структурированность информации.  
  *Дизайнер* - внешний вид и соответствие дизайна поставленным целям (область для которой создаётся продукт).  
  *Верстальщик* - семантика вёрстки и возможность переиспользования определенных элементов.  
  *Серверный программист* - разделение логики, отображения и модели.  

2. В силу отсутствия опыта воздержусь от ответа на данный вопрос.  

3. **Presentational Сomponents и Сontainer Сomponents**  
  *Presentational*. Основная цель такого компонента - это отображение. Нету зависимостей и не воздейтвует на стейт. Легко тестировать.  
  *Container*. Имеется стейт или же воздействует на глобальный стейт. Основная задача такого компонента - работа с логикой.  

  Главные преимущества такого подхода разделения - легче поддерживать, лучше структура и проще разобраться в самом приложении. Возможность переиспользоывать presentational components.

4. **Наследование в js**  
  Каждый объект в js имеет ссылку на другой объект - прототип. И эта цепочка идёт до тех пор, пока не дойдёт до объекта с прототипом null. В es6 есть понятие class, но это всего лишь синтаксический сахар.  

5. К сожалению не использовал в своих проектах end to end тестирование.  

6. Обратился бы к более опытному сотруднику, но если в данном случае такой возможности нет - реализовал бы стандартное поведение элементов формы.  

7. Линтер, babel, webpack, юнит-тесты.  

8. Hexlet, frontendmasters, medium, хабр.  
  Пока не открыл для себя программирование - волейбол, компьютерные игры и книги различной тематики.  

9. Не хочу в очередной раз дублировать. Если коротко - всю жизнь был профессиональным спортсменом. Цели стояли очень высокие, но в силу субъективных причин - не реализовал всё, что задумал (каждый спортсмен мечтает об Олимпиаде). Теперь же моя цель - программирование. Моя мечта стать высококлассным специалистом в этой области и, как бы банально это не звучало, поучаствовать в процессе улучшения этого мира для других людей))  
  https://github.com/koshkarik/project-lvl4-s223  
  https://github.com/koshkarik/project-lvl3-s194  

### Level 2

http://roasted-coat.surge.sh/

Одностраничное приложение, в котором пользователь в интерактивном режиме может создавать на карте маршрут, указывая начальную, конечную и промежуточные точки движения. Для каждой точки маршрута можно посмотреть ее адрес.  

#### Task Functional Requirements  

Новая точка маршрута добавляется с помощью ввода ее названия в текстовом поле и нажатия Enter. После этого:  
  • введенная точка маршрута отображается в конце списка уже добавленных точек    
  • в текущем центре карты появляется маркер, обозначающий новую точку маршрута  
Напротив каждой точки маршрута в списке находится кнопка удаления, при ее нажатии точка маршрута пропадает из списка, а с карты пропадает ее маркер.  
Порядок точек маршрута в списке можно изменять перетаскиванием.  
Маркеры, соответствующие точкам маршрута, можно перемещать по карте перетаскиванием.  
Маркеры на карте соединены прямыми линиями в том порядке, в котором они находятся в списке. Полученная таким образом ломаная изображает маршрут, первая точка в списке — начало маршрута, последняя — конец маршрута.  
При изменении порядка точек в списке или их удалении, а также при перемещении маркеров маршрут на карте автоматически перерисовывается.  
При клике на маркер появляется балун, в балуне отображается название соответствующей ему точки.  

#### Task Technical Requirements  
• Яндекс.Карты / Google Maps;  
• React.js;  
• Покрытие полученного кода тестами;  
• Небольшое описание того, как смотреть результат (запуск таска, открытие итоговой HTML-страницы в браузере и так далее);

