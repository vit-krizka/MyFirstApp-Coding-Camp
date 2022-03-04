let names = ["Tomáš", "Vít", "Melinka", "Mates", "David"];

/* Toto řešešní je správné pouze za pomocí forEach:
names.forEach((jmeno) => {
    $('ul').append(
        '<li>' + jmeno + '</li>'
    );
});
*/


/*
Toto řešešní je také správné:

for (i = 0; i < names.length; i++)
      {
  $('ul').append ("<li>" + names[i] + "</li>");
}
*/


/* Toto řešešní bylo špatně:
names.forEach(
    $('ul').append(
        '<li>' + names + '</li>'
    )
)
*/

for (i = 0; i < names.length; i++) {
    if (i < (-1 + names.length)) {
        $('ul').append ("<li>" + names[i] + "</li>");;
    } else {
        $('ul').append ("<li><b>" + names[i] + "</b></li>");;
    }
}

// Toto je dtuhá, méně problematická, část zadání:

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(
    '<h1>' + additionalBlock.title + '</h1>',
    '<p>' + additionalBlock.text + '</p>'
);