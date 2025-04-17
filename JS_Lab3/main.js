// шаг 1. создание класса item
class Item {
    constructor(name, weight, rarity) {  
        // конструктор принимает название, вес и редкость предмета
        this.name = name;              
        this.weight = weight;          
        this.rarity = rarity;          
    }

    getInfo() {
        // метод возвращает строку с информацией о предмете
        return "Название: " + this.name + ", Вес: " + this.weight + " кг, Редкость: " + this.rarity;
    }

    setWeight(newWeight) {
        // метод изменяет вес предмета на новый
        this.weight = newWeight;
    }
}

// шаг 2. создание класса weapon, который расширяет item
class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        // вызываем конструктор родительского класса item
        super(name, weight, rarity);  
        this.damage = damage;         // урон оружия
        this.durability = durability; // прочность оружия (0-100)
    }

    use() {
        // метод для использования оружия, уменьшает прочность на 10
        if (this.durability > 0) {
            this.durability = Math.max(this.durability - 10, 0); // не даёт уйти ниже нуля
            console.log(this.name + " использовано. Прочность: " + this.durability);
        } else {
            console.log(this.name + " сломано и не может быть использовано.");
        }
    }

    repair() {
        // метод для починки оружия — восстанавливает прочность до 100
        this.durability = 100;
        console.log(this.name + " отремонтировано до прочности 100.");
    }

    getInfo() {
        // переопределённый метод для вывода полной информации об оружии
        return super.getInfo() + ", Урон: " + this.damage + ", Прочность: " + this.durability;
    }
}

// шаг 3. тестирование классов

var sword = new Item("Steel Sword", 3.5, "rare"); // создаём предмет меч
console.log(sword.getInfo());                    // выводим информацию о мече
sword.setWeight(4.0);                            // изменяем вес меча
console.log(sword.getInfo());                    // снова выводим информацию

var bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100); // создаём оружие — лук
console.log(bow.getInfo());                               // выводим его характеристики
bow.use();                                                // используем лук (уменьшается прочность)
bow.use();                                                // ещё раз используем
console.log("Текущая прочность: " + bow.durability);      // показываем оставшуюся прочность
bow.repair();                                             // чиним лук
console.log("Текущая прочность после ремонта: " + bow.durability); // снова выводим прочность

var axe = new Weapon("Battle Axe", 5.0, "legendary", 35, 80); // создаём топор
console.log(axe.getInfo());                                  // выводим его характеристики
axe.use();                                                   // используем топор
axe.use();                                                   // ещё раз используем
axe.repair();                                                // чиним топор
console.log(axe.getInfo());                                  // выводим информацию после починки
