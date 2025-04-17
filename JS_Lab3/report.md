### Лабороторная работа №3

```markdown
### Шаг 1: Создание класса `Item`

```javascript
class Item {
    constructor(name, weight, rarity) {  
        this.name = name;              
        this.weight = weight;          
        this.rarity = rarity;          
    }

    getInfo() {
        return "Название: " + this.name + ", Вес: " + this.weight + " кг, Редкость: " + this.rarity;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }
}
```

Класс `Item` представляет базовый предмет с названием, весом и редкостью. Методы:
- `getInfo()`: возвращает строку с информацией о предмете.
- `setWeight(newWeight)`: изменяет вес предмета.

---

### Шаг 2: Создание класса `Weapon`, расширяющего `Item`

```javascript
class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);  
        this.damage = damage;         
        this.durability = durability; 
    }

    use() {
        if (this.durability > 0) {
            this.durability = Math.max(this.durability - 10, 0);
            console.log(this.name + " использовано. Прочность: " + this.durability);
        } else {
            console.log(this.name + " сломано и не может быть использовано.");
        }
    }

    repair() {
        this.durability = 100;
        console.log(this.name + " отремонтировано до прочности 100.");
    }

    getInfo() {
        return super.getInfo() + ", Урон: " + this.damage + ", Прочность: " + this.durability;
    }
}
```

Класс `Weapon` добавляет к предмету характеристики урона и прочности. Методы:
- `use()`: уменьшает прочность на 10, не позволяя уйти ниже 0.
- `repair()`: восстанавливает прочность до 100.
- `getInfo()`: переопределённый метод для вывода полной информации.

---

### Шаг 3: Тестирование классов

```javascript
var sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log(sword.getInfo());

var bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
bow.use();
console.log("Текущая прочность: " + bow.durability);
bow.repair();
console.log("Текущая прочность после ремонта: " + bow.durability);

var axe = new Weapon("Battle Axe", 5.0, "legendary", 35, 80);
console.log(axe.getInfo());
axe.use();
axe.use();
axe.repair();
console.log(axe.getInfo());
```

Примеры демонстрируют:
1. Создание предмета `Item` и изменение его веса.
2. Создание оружия `Weapon`, использование, ремонт и вывод информации.
```