export function farmPage(key, link, nav) {
  const pages = {
    '4500': {
      title: 'KidsTown School: Field-Trip to a Farm',
      body: `
        <p><b>You have just arrived at Zeek's farm.</b></p>
        <p>Zeek lives on a farm in the country.<br>This is a picture of Zeek's farm.</p>
        <p><img src="graphics/school/AZP00022.GIF" width="200" height="200" alt="Zeek's farm"></p>
        <div class="farm-zeek"><div><p>This is Farmer Zeek.</p><img src="graphics/school/AZS00001.GIF" width="206" height="200" alt="Farmer Zeek"></div><div><p>"Hello! Welcome to my farm!</p><p>You can just call me Zeek.<br>Let's get started on your tour!"</p></div></div>
        <p>${link('4510', "Click here to see the animals that live on Zeek's farm.")}</p>
        <p>${link('4530', 'Click here to see the different kinds of plants that Zeek grows.')}</p>`
    },
    '4510': {
      body: `<p>Zeek has many jobs to do on the farm.<br>He has to feed all of his animals.<br>Here is Zeek feeding his animals.</p><p><img src="graphics/school/AZQ00002.GIF" width="405" height="268" alt="Zeek feeding his animals"></p><p>One of Zeek's jobs is to take care of the animals that live on the farm.<br>He takes care of cows, pigs, horses, sheep and chickens.</p>`,
      section: 'animals'
    },
    '4511': {
      body: `<p>Cows produce milk. They are milked two to three times a day by the farmer.</p><p><img src="graphics/school/ABY50289.jpg" width="290" height="289" alt="Cow"></p><p>A baby cow is called a calf. Grown-ups are called heifers and bulls.</p><p>Milk is used in making cheese, butter and ice cream.<br>Cows eat the ${link('4542', 'hay')} and ${link('4541', 'corn')} that grow in the fields.</p>`, section: 'animals'
    },
    '4512': {
      body: `<p>Pigs like to play in the mud. That's why they always seem to be dirty.<br>On Zeek's farm, pigs live in this <b>pig pen</b>.</p><p><img src="graphics/school/ACC50134.jpg" width="446" height="276" alt="Pigs"></p><p>Baby pigs are called piglets.<br>Grown-ups are called sows and boars.<br>Pigs' noses are called snouts.<br>They use their snouts to dig up roots and grubs in the ground to eat.</p><p>Pigs like to eat a lot and will eat almost anything.<br>When pigs eat, they really <i>pig out!</i></p>`, section: 'animals'
    },
    '4513': {
      body: `<p>Horses help with many of the jobs on the farm.<br>Before farmers had tractors to help with planting and harvesting, horses were used to pull plows and other farm equipment.<br>Horses still help farmers by pulling wagons and buggies.</p><p><img src="graphics/school/ACB50144.jpg" width="346" height="346" alt="Horse"></p><p>Baby horses are called colts.<br>Grown-ups are called mares and stallions.<br>Zebras and donkeys are cousins of horses.</p><p>Farmers sometimes ride horses as they care for other animals by not letting them wander too far away.<br><br>Horses also like to play and <i>horse around!</i></p>`, section: 'animals'
    },
    '4514': {
      body: `<p>Sheep have a thick coat of wool that we call <b>fleece</b>.<br>The fleece sheared off, cleaned, spun, and made into clothes and blankets.</p><p><img src="graphics/school/ACE50059.jpg" width="345" height="237" alt="Sheep"></p><p>Baby sheep are called lambs. Grown-ups are called ewes and rams.</p><p>Sheep live together in groups called <b>flocks.</b><br>They eat grass that grows in the fields.<br>${link('4516', 'Dogs')} sometimes help farmers <b>herd</b> the sheep, keeping them together and out of danger.</p>`, section: 'animals'
    },
    '4515': {
      body: `<p>On Zeek's farm, chickens live in a <b>chicken coop</b>.<br>This is where the chickens will lay eggs.<br>Chickens eat insects and grain by pecking at them on the ground.</p><p><img src="graphics/school/ABX50047.jpg" width="445" height="283" alt="Chickens"></p><p>Baby chickens are called chicks. Grown-ups are called hens and roosters.<br>Roosters wake up farmers in the morning by crowing to announce the beginning of a new day.</p><p>Chickens lay eggs that are gathered and used for food.<br>Chicken feathers are used to make pillows.</p>`, section: 'animals'
    },
    '4516': {
      body: `<p>Dogs help on the farm by rounding up the other animals so that they can find their way home.<br>They can also go get help if someone is in trouble.</p><p><img src="graphics/school/ACU50036.jpg" width="446" height="255" alt="Dog"></p><p>Baby dogs are called puppies.</p><p>Dogs are known as the farmer's best friend.<br>They protect farmers and their families by barking to warn of danger.<br><br>Many dogs like to play fetch by chasing after sticks and bringing them back.</p>`, section: 'animals'
    },
    '4517': {
      body: `<p>Cats like to chase and play with each other around the farm.<br>They also chase small rodents like mice.<br>On Zeek's farm, cats can usually be found playing in the barn.</p><p><img src="graphics/school/ACT50369.jpg" width="348" height="216" alt="Cats"></p><p>Baby cats are called kittens.<br>Zeek's cats like to drink the milk from his ${link('4511', 'cows')}.<br>They mostly like to nap and cuddle.</p><p>Cats like to play with balls of yarn made using the wool from ${link('4514', 'sheep')}.<br>Zeek's cats also like to climb trees.</p>`, section: 'animals'
    },
    '4530': {
      body: `<p>Zeek grows vegetables in his fields and fruit in his orchards.</p><p>Zeek has different jobs to do in the different seasons of the year.<br>There are four seasons: <b>Spring, Summer, Fall</b> and <b>Winter</b>.</p><div class="farm-seasons"><p><b>Zeek's year begins with the season of Spring.</b><br>This season is also known as the farmer's planting season.<br>Farmers go out into their fields and plant seeds in the ground so they will grow.</p><p><b>After Spring comes Summer.</b><br>During the Summer the plants will grow big and tall.<br>Rain and sunshine helps the plants to grow.</p><p><b>After Summer comes Fall.</b><br>This season is known as harvest season.<br>That's when farmers go out into the fields and gather the plants that grew during the Spring and Summer.</p><p><b>After Fall comes Winter.</b><br>During the Winter, some of the fruits on the orchard trees will ripen and can be picked.</p></div><p><img src="graphics/school/AZR00003.GIF" width="285" height="240" alt="Zeek preparing to work in the fields"></p><p>Here is Zeek getting ready to go out to his fields.<br>We better get going!</p><p>${link('4540', "Click here to see what grows in Zeek's fields and orchards.")}</p>`
    },
    '4540': {
      body: `<p>Zeek grows many different kinds of vegetables and grains in his fields.<br>Some of the vegetables are ${link('4541', 'corn')} and ${link('4545', 'pumpkins')}.<br>Some of the grains are ${link('4542', 'hay')} and ${link('4544', 'wheat')}.</p><p>Zeek grows many different kinds of fruits in his orchards and vineyards.<br>Some of the fruits are ${link('4546', 'apples')}, ${link('4547', 'oranges')} and ${link('4548', 'grapes')}.</p><p><img src="graphics/school/AZO00008.GIF" width="225" height="274" alt="Farm produce"></p><p>After Zeek has gathered all of the vegetables and fruits, he sells them to be sent to grocery stores and supermarkets.</p>`, section: 'crops'
    },
    '4541': {
      body: `<div class="farm-side"><div><p>Some farmers plant corn in their fields.</p><p>Corn plants grow tall and have many, long, deep green leaves.</p><p>The top of the corn plant is called a <b>tassel</b>.</p><p>Each corn plant may have several ears of corn growing on it.</p><p>Farmers can use a machine called a <b>combine</b> to pick the corn.</p></div><img src="graphics/school/SSGP1195.jpg" width="284" height="380" alt="Corn"></div><p>There are many different types of corn plants.<br>Some corn is called Indian Corn and has kernels with several different colors.<br>The corn mostly found in supermarkets is called sweet corn.<br>The corn called popcorn has kernels that pop when heated.</p>`, section: 'crops'
    },
    '4542': {
      body: `<div class="farm-side"><div><p>${link('4511', 'Cows')} and ${link('4513', 'horses')} eat hay.</p><p>Hay is tall grass that is grown and dried in the Summer.</p><p>Farmers bale the hay to make it easier to store it in their barns.</p><p>Stored hay will be used to feed the animals during Winter.</p><p>Bales of hay can be either round or square-shaped.</p></div><img src="graphics/school/SSGP1724.jpg" width="300" height="280" alt="Hay"></div><p>After Zeek puts the hay into his barn, he likes to lie on it and take a nap!</p>`, section: 'crops'
    },
    '4544': {
      body: `<div class="farm-side"><div><p>Some farmers grow wheat in their fields.</p><p>Wheat that is planted in the Fall is called <b>Winter Wheat</b> because it grows during the Winter.</p><p>This wheat is harvested in the Spring.</p><p>Farmers can then use the same fields to plant other crops such as corn or hay.</p></div><img src="graphics/school/B41327.jpg" width="400" height="300" alt="Wheat"></div><p>Wheat is used to make flour. Flour can then be used to make cereal and bread.</p>`, section: 'crops'
    },
    '4545': {
      body: `<div class="farm-side"><div><p>Here are pumpkins in one of Zeek's fields.</p><p>Pumpkins can be used to feed the animals.</p><p>You can also make delicious pies out of them.</p><p>Pumpkin pies can be served with whipped cream made from the milk of ${link('4511', 'cows')}.</p></div><img src="graphics/school/671700.jpg" width="320" height="240" alt="Pumpkins"></div><p>Zeek likes to grow pumpkins because they can be carved into Jack-O-Lanterns for Halloween.</p>`, section: 'crops'
    },
    '4546': {
      body: `<div class="farm-side"><div><p>Here are apples growing in one of the orchards.</p><p>Zeek will sometimes just pick an apple right off the tree and eat it.</p><p>He has to be careful when he does that, because some worms like to eat apples too!</p></div><img src="graphics/school/B41300.jpg" width="400" height="300" alt="Apples"></div><p>Zeek likes to grow apples because he can make apple pies and caramel apples.</p>`, section: 'crops'
    },
    '4547': {
      body: `<div class="farm-side"><div><p>These oranges grow in one of the orchards.</p><p>Oranges are squeezed to make orange juice.</p><p>You can peel off the outer part of the orange, called the <b>rind</b>, and eat the sweet and juicy inner segments.</p></div><img src="graphics/school/B9451.jpg" width="320" height="240" alt="Oranges"></div><p>Zeek likes to grow oranges because he can eat them for snacks.<br>Oranges also contain Vitamin C that helps people to stay healthy.</p>`, section: 'crops'
    },
    '4548': {
      body: `<div class="farm-side"><div><p>Grapes grow on vines in a vineyard.</p><p>Grapes come in different colors like purple, red and green.</p><p>They are squeezed to make grape juice or can be eaten as a snack.</p><p>If the grapes are picked and left in the Sun to dry out, they become raisins.</p><p>Raisin are used for snacks and to put on breakfast cereal.</p></div><img src="graphics/school/SSGP1004.jpg" width="284" height="380" alt="Grapes"></div><p>Zeek also uses his grapes to make grape jelly.</p>`, section: 'crops'
    },
    '4560': {
      body: `<p>Zeek would like to thank you for coming and joining him on his farm.</p><div class="farm-zeek"><img src="graphics/school/CKC01001.GIF" width="181" height="200" alt="Farmer Zeek"><div><p>"Come back and see us again real soon!"</p><p>"Thanks for visiting!"</p><p>"I hope you had a great time<br>on the farm!"</p></div></div><p>${link('4000', 'Click here to return to School')}</p>`
    }
  };

  const page = pages[key];
  if (!page) return null;

  const animalNav = `<div class="farm-choice"><p>Which animals should we visit next?</p><p>${[['4511','Cows'],['4512','Pigs'],['4513','Horses'],['4514','Sheep'],['4515','Chickens'],['4516','Dogs'],['4517','Cats']].map(([k,t]) => link(k,t)).join(' &nbsp; ')}</p></div>`;
  const cropNav = `<div class="farm-choice"><p>Which crop should we visit next?</p><p>${[['4541','Corn'],['4542','Hay'],['4544','Wheat'],['4545','Pumpkins'],['4546','Apples'],['4547','Oranges'],['4548','Grapes']].map(([k,t]) => link(k,t)).join(' &nbsp; ')}</p></div>`;
  const farmNav = `<div class="farm-nav">${link('4500','Start')}<span>${link('4510','Animals')}<br>${link('4530','Crops')}</span>${link('4560','End')}</div>`;

  return `<section class="legacy-page farm-page"><div class="farm-wrap">${page.title ? `<h1>${page.title}</h1><hr>` : ''}${page.body}${page.section === 'animals' ? animalNav : ''}${page.section === 'crops' ? cropNav : ''}${key !== '4500' && key !== '4530' ? farmNav : ''}</div>${nav()}</section>`;
}
