# Visual-Music-Art
---
Project for creating music visualizer. Yes, it is.

* JS -- Sunya Gor'kova
* CSS -- Cavva Dmitriev
* HTML -- Marat Chernigin
* Git -- Danusii Klimovski


## How to use Git:

1. First is download GIt
2. Next do right click in any folder and choose "Git Bash Here"
* Greatings! You open console.

I'm sorry I was on English just right now and can't stop to write tn English
* Вы открыли терминал.
* Первая строка обозначает ваш компьютер и выбранную в нём папку

### Добавление файлов в репозиторий

* `cd`                                Первая команда нужна чтобы выбрать папку в которой будем работать
* `git clone <...>`                   Клонируем репозиторий, вставляем ссылку HTTPS из Code в репозитории
* `cd Visual-Music-Art`            Выбираем папку проекта
* `git status`                        Команд запрашивающая статус локального репозитория
* `git add -all`                     Добавляем новые файлы
* `git commit -m “<что изменили>“`    Коммитим, пишем название коммита, что изменили
* `git push`                          Пушим

Всë это чтобы добавить файлы в основной репозиторий

### Создание собственной ветки(Не нужно пока что делать)

* `git checkout -b new_feature`     создание ветки, вместо new_feature стоит написать какое либо название 

* `git checkout`
Команда позволяет «заглянуть» в репозиторий, который в данный момент не открыт. Например, вы можете перейти в ветку `master`:

* `git checkout master`
или открыть ветку `new_feature`: `git checkout new_feature`

* `git merge new_feature`
Эта команда берет все изменения в ветке new_feature и добавляет их в ветку master.
