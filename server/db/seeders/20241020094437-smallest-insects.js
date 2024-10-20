'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = [
      {
        name: 'Western Pygmy Blue Butterfly',
        description:
          " Though they appear ornate and delicate, prehistoric fossils suggests that butterflies have been around for more than 200 million years. The pre-historic ancestors to the modern day butterfly fluttered amongst the dinosaurs during a time when there weren’t even pollen-rich flowers to feast on. They also managed to survive mass extinction events such as the ice age. Today, the order of Lepidopterous insects, currently comprise more than 180,000 species and include not only butterflies but also members of the moth family.\nThe smallest member of the butterfly family is thought to be the pygmy blue butterfly (Brephidium exilis). The western pygmy can be found throughout North America and as far west as Hawaii and the middle east. It can be recognized by the copper brown and dull blue pattern at the bases of both wings. The tiny butterfly's wingspan can be as little as 12 millimeters. Its counterpart, the eastern blue pygmy can be found in forests along the Atlantic coasts.  ",
        territory: 'North America',
        fact: 'The pre-historic ancestors to the modern day butterfly fluttered amongst the dinosaurs during a time when there weren’t even pollen-rich flowers to feast on',
        millimeters: 12,
      },
      {
        name: 'Patu Digua Spider',
        description:
          'Most of the spiders found around American homes are more helpful than harmful. This includes the smallest spider, the patu digua.\nThe patu digua lives around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia. They’re hard to spot as the males grow to be about only a third of a millimeter, smaller than even the head of a pin. Some believe there are even smaller arachnids crawling around somewhere. For example, the female Anapistula caecula of West Africa is about three one-hundredths of an inch and the males would likely be smaller. Generally, male spiders are smaller than the females.       ',
        territory:
          'Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia',
        fact: 'They’re hard to spot as the males grow to be about only a third of a millimeter, smaller than even the head of a pin',
        millimeters: 0.3,
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description:
          " Among insects, dragonflies are among the largest flying bugs. In fact, the dragonfly’s prehistoric ancestor Meganeura was one of the largest insects ever known with a wingspan that exceeded 70 centimeters. Fossil records show it lived as far back as 300 million years ago during the Triassic period and was a predator species that fed on other insects. Today's dragonfly species (Odanata), while not nearly as large, can boast a wingspan of nearly 20 centimeters and body length of about 12 centimeters.\nOn the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea). It.s also known as the northern pygmyfly or tiny dragonfly. Part of the Libellulidae family of dragonflies, the scarlet dwarf's native geography stretches from Southeast Asia to China and Japan. It's occasionally found in Australia. The dragonfly's wingspan measures roughly 20 millimeters or three-quarters of an inch.",
        territory: 'Australia',
        fact: 'Fossil records show it lived as far back as 300 million years ago during the Triassic period and was a predator species that fed on other insects..',
        millimeters: 20,
      },
      {
        name: 'Midget Moths',
        description:
          " While butterflies are usually associated with the warmth of daytime, moths tend to take flight in the evenings. However, it's not always easy to distinguish between them. The Melanitis leda or common evening brown, for example, is considered a night-dwelling butterfly and there are some moths that come out during the daytime. The best way to tell them apart is by looking at the antennae, as butterfly antennae have a tiny ball tip compared to moths who don't.\nThe smallest moths come from the Nepticulidae family and are referred to as pigmy moths or midget moths. Some species, such as the pygmy sorrel moth (Enteucha acetosae), have wingspans that measure as little as 3 millimeters, whereas the average moth wingspan is 25 millimeters. They start out as little larvae who mine the leaves of various host plants. The caterpillar's munching pattern leaves a unique and rather large imprint on the leaves they feed on.  ",
        territory: 'North America',
        fact: 'The best way to tell them apart is by looking at the antennae, as butterfly antennae have a tiny ball tip compared to moths who don’t. ',
        millimeters: 25,
      },
      {
        name: 'Bolbe Pygmaea Mantis ',
        description:
          " Mantises are rare insects that have a special relationship with humans. The ancient Greeks considered the mantis to have supernatural powers and they've been deified in ancient Egyptian texts. The Chinese in particular have a certain fondness and reverence for an insect that ancient poems described as a symbol of courage and fearlessness. \nIn fact, the praying mantis' arm craning fighting technique and strategy has inspired at least two popular martial arts known as “Northern Praying Mantis” and “Southern Praying Mantis.” Mantises are also one of the few insects that are kept and raised as pets. \nThe order of Mantodea consists of more than 2,400 species and can be as large is 3.5 inches standing upright. However, the smallest mantis species, Bolbe pygmaea, is only 1 centimeter in length and can be found in Australia.  ",
        territory: 'Australia.',
        fact: "The ancient Greeks considered the mantis to have supernatural powers and they've been deified in ancient Egyptian texts. The Chinese in particular have a certain fondness and reverence for an insect that ancient poems described as a symbol of courage and fearlessness.",
        millimeters: 100,
      },
      {
        name: 'Microtityus Minimus Scorpion',
        description:
          " Scorpions are often thought of as one of the fiercest and lethal insects. They've been shown to fight off and defeat larger predators such as giant spiders. Such predatory prowess evolved over the course of more than 430 million years with sophisticated features such as a venomous stinger, strong claws, and a thick exoskeleton that functions as body armor. But while scorpion venom is poisonous, only 25 species produce a toxin capable of killing humans.\nThis makes even the smallest scorpion species a tough little guy. Microtityus minimus, the world’s tiniest scorpion, was discovered in 2014 by researchers surveying the Greater Antillean Island of Hispaniola in the Dominican Republic. A fully grown scorpion measures only 11 millimeters, which makes its claws and stinger less intimidating and actually kind of cute.",
        territory: 'Dominican Republic.',
        fact: 'A fully grown scorpion measures only 11 millimeters, which makes its claws and stinger less intimidating and actually kind of cute.  ',
        millimeters: 11,
      },
      {
        name: 'Euryplatea Nanaknihali Fly',
        description:
          "At less than half a millimeter, Euryplatea nanaknihali is the smallest fly species on earth. These tiny flies lay their eggs inside the heads of ants, and once the eggs hatch and the larvae grow, they start to devour its host from the inside out, eventually decapitating the ant. While it's pretty gruesome stuff, they're hardly the only fly species to deploy such a reproductive strategy. Species in the Phoridae fly family also deposit eggs in the bodies of ants. ",
        territory: 'Thailand.',
        fact: 'These tiny flies lay their eggs inside the heads of ants, and once the eggs hatch and the larvae grow, they start to devour its host from the inside out',
        millimeters: 0.5,
      },
      {
        name: 'Uranotaenia lowii Mosquito',
        description:
          " The most maddening thing about bloodthirsty mosquitoes is the stealthy way they cover us in bites. Despite sucking enough blood to double their weight, mosquitos are able to deploy a special wing-beating technique that allows them to swoop in and take off quietly without being detected. This crafty form of evasion is especially problematic in parts of the world where mosquitos are known to spread deadly viruses and disease.\nFortunately, the world's smallest mosquito doesn't like the taste of human blood. The 2.5 millimeter-long Uranotaenia lowii, sometimes known as the pale-footed Uranotaenia, prefers to bite frogs and other amphibians. They locate their targets by utilizing their innate acoustic sensitivity to croaks and other sounds. The Uranotaenia lowii's habitat stretches along the south from Texas to Florida, and can be found as far north as North Carolina. ",
        territory: 'USA.',
        fact: "the world's smallest mosquito doesn't like the taste of human blood",
        millimeters: 2.5,
      },
      {
        name: 'Fairyfly Wasp',
        description:
          'The world’s smallest insect belongs to the fairyfly or fairy wasp family. On average, they grow to be only .5 to 1 millimeter in length. Irish entomologist Alexander Henry Haliday first noted the discovery of the fairyfly in 1833, describing them as "the very atoms of the order Hymenoptera." Hymenoptera is the large order of insects, comprising the sawflies, wasps, bees, and ants. Fairyflies can be found all over the world and thrive in a wide range of environments and ecosystems, from wet rainforests to dry deserts.   \nThe smallest insect species within the family, Dicopomorpha echmepterygis, is only .139 millimeters long and thus virtually impossible to detect with the naked eye. They possess neither wings or eyes, have mere holes for mouths and have two tiny antennae. The smallest flying insect is also a fairyfly species called the kikiki huna (.15 mm), which inhabit regions in Hawaii, Costa Rica and Trinidad. The kikiki is a close relative to the tinkerbella nana wasp, another fairyfly species whose name somehow perfectly befits its diminutive (.17 mm) stature. ',
        territory: 'Hawaii, Costa Rica and Trinidad..',
        fact: 'They possess neither wings or eyes, have mere holes for mouths and have two tiny antennae',
        millimeters: 0.139,
      },
    ];
    await queryInterface.bulkInsert('Insects', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    let names = [
      'Western Pygmy Blue Butterfly',
      'Patu Digua Spider',
      'Scarlet Dwarf Dragonfly',
      'Midget Moths',
      'Bolbe Pygmaea Mantis ',
      'Microtityus Minimus Scorpion',
      'Euryplatea Nanaknihali Fly',
      'Uranotaenia lowii Mosquito',
      'Fairyfly Wasp',
    ];
    await queryInterface.bulkDelete('Insects', { name: names }, {});
  },
};
