export interface ArticleSection {
  type: 'paragraph' | 'h2' | 'tip' | 'keyTakeaway' | 'associatedProduct';
  content?: string;
  title?: string;
  items?: string[];
  productId?: string;
}

export interface ArticleContent {
  slug: string;
  sections: ArticleSection[];
}

export const articleContents: ArticleContent[] = [
  {
    slug: 'lubrifiant-guide-complet',
    sections: [
      {
        type: 'h2',
        content: 'À quoi sert vraiment un lubrifiant intime ?',
      },
      {
        type: 'paragraph',
        content: 'La réponse courte : à réduire la friction et à améliorer le confort. Mais la réalité, c\'est que son utilité va un peu plus loin que ça. Le corps ne produit pas toujours la même quantité de lubrification naturelle — et ce n\'est pas une question d\'envie ou d\'excitation. Le stress, la fatigue, les variations hormonales, certains médicaments, ou simplement la façon dont on est fait·e : tout cela joue un rôle.',
      },
      {
        type: 'paragraph',
        content: 'Un bon lubrifiant intime vient compléter ce que le corps fait naturellement, sans le remplacer. Il ne "corrige" rien — il accompagne. Et pour beaucoup de personnes, cette simple addition change radicalement la qualité des moments intimes, en termes de confort comme de plaisir.',
      },
      {
        type: 'h2',
        content: 'Les trois grandes familles de lubrifiants',
      },
      {
        type: 'paragraph',
        content: 'Les lubrifiants à base d\'eau sont les plus courants, et souvent les plus recommandés pour débuter. Leur texture est légère, proche de la sensation naturelle. Ils sont faciles à rincer, compatibles avec tous les types d\'accessoires intimes, et généralement bien tolérés par les peaux sensibles. Leur seul bémol : ils s\'évaporent plus vite que les autres, ce qui peut nécessiter de renouveler l\'application.',
      },
      {
        type: 'paragraph',
        content: 'Les lubrifiants à base de silicone ont une texture plus soyeuse et une tenue bien plus longue. Quelques gouttes suffisent pour un effet durable. Attention cependant : ils ne sont pas compatibles avec les accessoires en silicone, car ils peuvent abîmer le matériau. À réserver pour un usage sans accessoire, ou avec des objets en d\'autres matières.',
      },
      {
        type: 'paragraph',
        content: 'Les lubrifiants naturels et bio répondent à une demande croissante de produits plus proches de la nature. Formulés sans perturbateurs endocriniens, sans parfum artificiel, sans ingrédients controversés — ils sont idéaux pour les personnes à la peau réactive ou simplement soucieuses de ce qu\'elles appliquent sur leur corps.',
      },
      {
        type: 'associatedProduct',
        productId: 'l5',
      },
      {
        type: 'h2',
        content: 'Comment choisir le lubrifiant qui vous convient ?',
      },
      {
        type: 'paragraph',
        content: 'Choisir un lubrifiant intime, c\'est avant tout une question de contexte et de ressenti personnel. Si vous débutez ou si vous avez la peau sensible, le lubrifiant à base d\'eau est le point de départ le plus sûr. Il s\'adapte à presque toutes les situations, se nettoie facilement et laisse peu de place aux mauvaises surprises.',
      },
      {
        type: 'paragraph',
        content: 'Si le confort sur la durée est votre priorité, le lubrifiant au silicone sera probablement plus satisfaisant. Si vous êtes attentif·ve à la composition de vos produits de soin en général, tournez-vous vers les formules naturelles ou certifiées bio. Lisez la liste d\'ingrédients, comme vous le feriez pour une crème visage.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'Évitez les lubrifiants contenant des parfums forts, de la glycérine en grande quantité (qui peut favoriser les irritations), ou des conservateurs agressifs. Un bon lubrifiant, c\'est d\'abord un produit qui respecte la peau et les muqueuses — moins il y a d\'ingrédients inconnus, mieux c\'est.',
      },
      {
        type: 'h2',
        content: 'Ce que change un lubrifiant bien choisi',
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas anodin de prendre le temps de choisir un lubrifiant plutôt que d\'attraper le premier venu. Un produit adapté à sa peau, à ses besoins, à la façon dont on vit son intimité — ça fait une vraie différence. Moins d\'inconfort, plus de présence dans le moment, une relation à son corps plus détendue. Ce sont des détails qui, mis bout à bout, contribuent à un bien-être intime durable.',
      },
      {
        type: 'paragraph',
        content: 'Et puis, il y a quelque chose de symbolique dans ce geste simple : choisir un produit de qualité pour soi. C\'est une petite façon de se dire que son confort compte, que son plaisir mérite attention — et que prendre soin de son intimité fait partie intégrante de prendre soin de soi. Pas besoin d\'en faire plus. Juste de commencer par le bon choix.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'Le lubrifiant ne "corrige" rien — il accompagne ce que le corps fait naturellement.',
          'Base eau : idéal pour débuter, compatible avec tous les accessoires, facile à rincer.',
          'Base silicone : texture soyeuse, longue durée, mais incompatible avec les accessoires en silicone.',
          'Naturel/bio : parfait pour les peaux réactives — lisez toujours la liste d\'ingrédients.',
          'Évitez les parfums forts, la glycérine en excès et les conservateurs agressifs.',
        ],
      },
    ],
  },
  {
    slug: 'confiance-en-soi-intimite',
    sections: [
      {
        type: 'h2',
        content: 'L\'image de soi : ce miroir qu\'on déforme sans s\'en rendre compte',
      },
      {
        type: 'paragraph',
        content: 'On est souvent bien plus sévère envers soi-même qu\'envers n\'importe qui d\'autre. Ce ventre qu\'on rentre. Ces hanches qu\'on cache. Cette voix intérieure qui commente, compare, juge — parfois même dans les moments où on devrait juste être là, présent·e, vivant·e. L\'image qu\'on a de son corps finit par teinter toute la relation à soi. Et quand cette image est abîmée, c\'est toute l\'intimité qui s\'en ressent.',
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas une question de physique. C\'est une question de regard. Deux personnes avec le même corps peuvent le vivre de façon radicalement différente — l\'une avec légèreté, l\'autre avec une honte silencieuse qu\'elle traîne depuis l\'adolescence. La première étape, ce n\'est pas d\'apprendre à s\'aimer éperdument du jour au lendemain. C\'est juste de commencer à observer ce regard intérieur — à le remarquer, à ne plus le prendre pour une vérité absolue. Parce qu\'il ne l\'est pas.',
      },
      {
        type: 'h2',
        content: 'Les blocages qu\'on ne nomme pas',
      },
      {
        type: 'paragraph',
        content: 'Il y a des choses qu\'on ne dit pas, même à ceux qu\'on aime. La peur de ne pas être à la hauteur. La gêne diffuse quand on pense à ses propres désirs. Cette impression que certaines envies sont "trop", ou au contraire "pas assez normales". Ces blocages-là sont souvent silencieux — ils n\'ont pas de nom, pas de forme précise. Ils se manifestent juste par une légère crispation, une distance imperceptible, une façon de ne jamais vraiment lâcher prise.',
      },
      {
        type: 'paragraph',
        content: 'Ils viennent de loin. D\'une éducation qui a préféré le silence à l\'explication. D\'une culture qui a longtemps associé le plaisir à la honte, ou l\'épanouissement intime à quelque chose de futile, d\'accessoire. Les nommer — même juste pour soi, dans sa tête — est déjà un acte de courage. Pas pour les effacer d\'un coup, mais pour commencer à les regarder sans en avoir peur. Ce qu\'on peut observer, on peut aussi, doucement, le traverser.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'Commencez par un geste simple : notez, sans jugement, une chose que vous appréciez dans votre corps aujourd\'hui. Pas ce qu\'il fait pour les autres — ce qu\'il fait pour vous. Ce petit exercice, répété régulièrement, change doucement la qualité du regard qu\'on se porte.',
      },
      {
        type: 'h2',
        content: 'Se reconnecter à soi : une exploration, pas une performance',
      },
      {
        type: 'paragraph',
        content: 'Le mot "épanouissement" a parfois un côté écrasant. Comme si c\'était un état à atteindre, un niveau à débloquer. Mais l\'épanouissement intime, ça ne ressemble pas à une destination. Ça ressemble plutôt à un chemin qu\'on apprend à arpenter avec un peu plus de douceur chaque jour.',
      },
      {
        type: 'paragraph',
        content: 'Se reconnecter à son corps, à ses sensations, à ce qui fait du bien — ça prend du temps. Et ça passe souvent par des gestes simples, presque anodins. Prendre le temps d\'un soin. Choisir un vêtement parce qu\'il est doux sur la peau plutôt que parce qu\'il cache. S\'accorder un moment seul·e, sans justification. Certains y ajoutent des outils de bien-être intime — des objets pensés pour aider à explorer ses sensations, à mieux se connaître, à développer une relation plus apaisée avec son corps. Pas comme une solution miracle, mais comme un soutien.',
      },
      {
        type: 'associatedProduct',
        productId: 'e5',
      },
      {
        type: 'h2',
        content: 'La confiance en soi se construit dans l\'intime',
      },
      {
        type: 'paragraph',
        content: 'Il y a quelque chose d\'assez révélateur dans le fait que la confiance en soi et la relation à son intimité évoluent souvent ensemble. Quand on commence à mieux se connaître — ses besoins, ses envies, ses limites — on développe naturellement une assurance nouvelle. Pas l\'assurance bruyante qui cherche à convaincre, mais celle, plus tranquille, qui n\'a plus besoin de se justifier.',
      },
      {
        type: 'paragraph',
        content: 'Cette confiance-là se voit, même si on ne la montre pas. Elle change la façon dont on entre dans une pièce, dont on parle de soi, dont on reçoit l\'affection ou le désir de l\'autre. Elle rend les relations plus directes, plus sincères, moins teintées par la peur du jugement. Et elle se construit rarement dans les grands moments — dans chaque fois qu\'on choisit de s\'écouter plutôt que de se corriger. Dans chaque fois qu\'on décide que ses propres besoins méritent une place dans sa vie.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'L\'image de soi n\'est pas une vérité — c\'est un regard qu\'on peut apprendre à adoucir.',
          'Nommer ses blocages, même juste pour soi, est déjà un acte de courage.',
          'L\'épanouissement intime est un chemin, pas une destination à atteindre.',
          'Se reconnecter à son corps passe par des gestes simples, répétés avec intention.',
          'La confiance en soi et le bien-être intime évoluent ensemble — l\'un nourrit l\'autre.',
        ],
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas un travail facile. Mais c\'est l\'un des plus beaux qu\'on puisse faire pour soi. Et il n\'est jamais trop tard pour commencer.',
      },
    ],
  },
  {
    slug: 'massage-sensuel-guide',
    sections: [
      {
        type: 'h2',
        content: 'Créer l\'espace avant même de commencer',
      },
      {
        type: 'paragraph',
        content: 'Avant le premier geste, il y a l\'atmosphère. Et elle compte bien plus qu\'on ne le croit. Un massage qui se déroule dans une pièce froide, éclairée au néon, avec la télévision en fond sonore — même les mains les plus expertes n\'y feront pas grand-chose. L\'environnement prépare le corps à se relâcher. Il envoie un signal silencieux : tu peux laisser aller.',
      },
      {
        type: 'paragraph',
        content: 'Commence par la lumière. Tamisée, chaude, indirecte. Des bougies font des merveilles — pas besoin d\'en allumer vingt, deux ou trois suffisent à transformer une pièce ordinaire en espace de détente. La musique, ensuite. Quelque chose de lent, sans paroles de préférence — pour ne pas distraire l\'attention. La température de la pièce mérite aussi qu\'on y pense. Un corps qui a froid se contracte, se referme. Un corps qui a chaud — juste assez — s\'abandonne.',
      },
      {
        type: 'h2',
        content: 'L\'huile, ce détail qui change tout',
      },
      {
        type: 'paragraph',
        content: 'Le toucher à mains sèches a ses vertus, mais pour un massage sensuel entre partenaires, une bonne huile transforme l\'expérience du tout au tout. Elle permet aux mains de glisser sans friction, d\'envelopper plutôt que d\'appuyer. Elle ralentit naturellement les gestes, les rend plus fluides, plus intentionnels. Et son parfum, s\'il est bien choisi, agit comme un élément de l\'ambiance à part entière.',
      },
      {
        type: 'paragraph',
        content: 'Quelques gouttes suffisent. On réchauffe l\'huile entre ses paumes avant de la poser sur la peau — ce petit geste d\'attention change tout. Il dit : je prends soin de toi, même dans les détails. Les huiles végétales douces — comme l\'huile d\'amande douce, de jojoba ou de coco — sont idéales pour la peau. Certaines sont enrichies en arômes apaisants ou légèrement réchauffants, ce qui ajoute une dimension sensorielle supplémentaire.',
      },
      {
        type: 'associatedProduct',
        productId: 'd4',
      },
      {
        type: 'h2',
        content: 'Des gestes simples, portés par l\'intention',
      },
      {
        type: 'paragraph',
        content: 'On croit souvent qu\'il faut avoir appris des techniques précises pour masser "correctement". Mais dans un contexte de connexion intime, ce n\'est pas la technique qui prime — c\'est l\'intention derrière le geste. Commence par des mouvements larges, lents, sur le dos ou les épaules. Des glissés de la paume entière, de haut en bas, qui couvrent de grandes surfaces. L\'objectif à ce stade n\'est pas de dénouer des contractures musculaires — c\'est de faire sentir à l\'autre qu\'il ou elle est vue, touchée, présente dans tes mains.',
      },
      {
        type: 'paragraph',
        content: 'Laisse tes gestes ralentir encore. Plus un massage est lent, plus il invite à lâcher prise. Varie les pressions doucement. Une main légère qui effleure, puis une paume qui s\'appuie avec un peu plus de poids. Ces contrastes éveillent l\'attention du corps, le gardent dans un état d\'éveil doux, entre détente et plaisir. Les zones souvent négligées — la nuque, les tempes, les mains, la plante des pieds — sont parfois celles qui provoquent le plus de relâchement.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'Réchauffez toujours l\'huile entre vos paumes avant de la poser sur la peau de l\'autre. Ce geste simple, qui ne prend que quelques secondes, dit beaucoup : il montre que vous êtes attentif·ve, présent·e, et que le confort de l\'autre compte dans les moindres détails.',
      },
      {
        type: 'h2',
        content: 'L\'écoute, le vrai geste de l\'art du massage',
      },
      {
        type: 'paragraph',
        content: 'Tout ce qui précède n\'a de valeur que si tu restes attentif·ve à l\'autre. Le massage sensuel est un dialogue. Pas verbal, mais tout aussi clair. Un souffle qui se modifie, des épaules qui descendent d\'un cran, un léger frémissement — autant de réponses silencieuses qui guident ta prochaine pression, ton prochain mouvement.',
      },
      {
        type: 'paragraph',
        content: 'Apprends à lire ces signaux. Et si tu n\'es pas sûr·e, il y a toujours la question murmurée, douce, sans briser le moment : c\'est bien là ?, tu veux que je continue ?. Ces quelques mots ne cassent pas l\'atmosphère — ils la renforcent. La communication non verbale dans un massage, c\'est aussi ta propre façon de te poser. Ta respiration lente invite l\'autre à ralentir la sienne. Et parfois, les rôles s\'échangent — ce passage, s\'il se fait naturellement, est l\'un des moments les plus beaux du rituel.',
      },
      {
        type: 'h2',
        content: 'Après le massage, le silence qui relie',
      },
      {
        type: 'paragraph',
        content: 'Les minutes qui suivent un massage ont quelque chose de particulier. Le corps est encore chaud, les sens à fleur de peau, la tête légèrement vide de toutes ces pensées qui l\'encombrent d\'habitude. C\'est un état rare, précieux — une forme de présence au moment qu\'on ne retrouve pas si souvent dans le quotidien.',
      },
      {
        type: 'paragraph',
        content: 'Ne cherche pas à meubler ce silence. Laisse-le exister. Restez proches l\'un de l\'autre, sans écran, sans agenda. Ce n\'est pas un vide — c\'est une connexion qui n\'a pas besoin de mots pour être réelle.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'L\'atmosphère prépare le corps : lumière tamisée, musique douce, pièce chaude.',
          'Une bonne huile transforme l\'expérience — réchauffez-la toujours entre vos paumes avant de la poser.',
          'Ce n\'est pas la technique qui prime, c\'est l\'intention : des gestes lents, larges, présents.',
          'Le massage est un dialogue silencieux — apprenez à lire les signaux du corps de l\'autre.',
          'Le silence qui suit est précieux : ne le meublez pas, laissez la connexion exister.',
        ],
      },
      {
        type: 'paragraph',
        content: 'Le massage sensuel, au fond, n\'est pas une technique. C\'est une façon de dire à l\'autre : tu comptes, ton corps compte, ce moment compte. Et dans une relation, il n\'y a peut-être pas de message plus beau que celui-là.',
      },
    ],
  },
  {
    slug: 'choisir-premier-sextoy',
    sections: [
      {
        type: 'h2',
        content: 'Lever le voile sur les idées reçues',
      },
      {
        type: 'paragraph',
        content: 'Le premier obstacle, ce n\'est souvent pas le choix en lui-même — c\'est la gêne qui précède. L\'impression que c\'est un sujet réservé à certains, ou qu\'il faut déjà "s\'y connaître" pour oser franchir le pas.',
      },
      {
        type: 'paragraph',
        content: 'Mais la réalité, c\'est que les accessoires intimes sont avant tout des objets de bien-être. Comme un coussin de massage, un bain aux huiles essentielles ou une bouillotte — ils sont là pour procurer du confort, de la détente, du plaisir. Rien de mystérieux là-dedans. De plus en plus de personnes, de tous horizons et de tous âges, intègrent ce type de produits dans leur routine de soin personnel. Non pas par obligation ou par mode, mais simplement parce qu\'ils contribuent à une meilleure connaissance de soi.',
      },
      {
        type: 'h2',
        content: 'Comprendre les grandes familles de produits',
      },
      {
        type: 'paragraph',
        content: 'Pas besoin d\'un guide encyclopédique pour s\'y retrouver. Il existe quelques grandes catégories à connaître, et l\'une d\'elles correspond probablement à ce que tu cherches.',
      },
      {
        type: 'paragraph',
        content: 'Les accessoires de relaxation et de massage sont souvent les plus accessibles pour débuter. Doux, discrets, polyvalents, ils s\'utilisent aussi bien pour dénouer des tensions musculaires que pour explorer des sensations nouvelles. Idéaux pour une première approche sans pression.',
      },
      {
        type: 'paragraph',
        content: 'Les accessoires de stimulation légère sont pensés pour le plaisir personnel, avec des formats souvent compacts et des intensités réglables. Ils permettent d\'explorer à son propre rythme, en douceur, sans jamais être submergé·e. Il existe aussi des produits d\'accompagnement — huiles, gels, soins — qui enrichissent l\'expérience et prennent soin de la peau en même temps.',
      },
      {
        type: 'associatedProduct',
        productId: 'e1',
      },
      {
        type: 'h2',
        content: 'Choisir selon ses envies, pas selon les autres',
      },
      {
        type: 'paragraph',
        content: 'C\'est peut-être le conseil le plus important : ton premier accessoire intime, c\'est le tien. Pas celui que quelqu\'un a recommandé sur un forum, pas le plus vendu de l\'année. Celui qui correspond à tes attentes du moment.',
      },
      {
        type: 'paragraph',
        content: 'Pour t\'aider à y voir plus clair, pose-toi quelques questions simples. Est-ce que je cherche avant tout à me détendre ? À explorer de nouvelles sensations ? À mieux connaître mon corps ? À partager quelque chose avec mon partenaire ? Les réponses orientent naturellement vers un type de produit plutôt qu\'un autre.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'Côté matières, c\'est non négociable : choisissez du silicone médical, du verre traité ou de l\'acier inoxydable. Ces matériaux sont doux, sans odeur, conçus pour le contact avec la peau. Évitez les matières bon marché dont vous ne connaissez pas la composition.',
      },
      {
        type: 'paragraph',
        content: 'Côté praticité, quelques critères font toujours la différence pour un premier achat. La simplicité d\'utilisation d\'abord : un objet avec trop de fonctions peut vite devenir source de stress plutôt que de plaisir. La discrétion ensuite : un format compact, silencieux, facile à ranger.',
      },
      {
        type: 'h2',
        content: 'Commencer petit, sans se mettre de pression',
      },
      {
        type: 'paragraph',
        content: 'Il n\'y a pas de "bonne façon" de vivre cette découverte. Pas de performance attendue, pas de résultat à atteindre. Certaines personnes trouvent leur bonheur dès le premier essai, d\'autres prennent le temps de tâtonner, d\'essayer, d\'ajuster. Les deux sont parfaitement valables.',
      },
      {
        type: 'paragraph',
        content: 'Ce qui compte, c\'est d\'avancer à ton propre rythme. De choisir un produit simple plutôt que sophistiqué. De te donner le droit de changer d\'avis, de recommencer, d\'explorer sans jugement. Et si jamais tu hésites encore au moment de choisir, rappelle-toi juste une chose : chaque personne qui a un accessoire intime aujourd\'hui a commencé exactement là où tu es — avec des questions, un peu de curiosité, et l\'envie de prendre soin d\'elle-même un peu mieux qu\'avant. C\'est déjà un beau point de départ.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'Les accessoires intimes sont avant tout des objets de bien-être — pas de mystère, pas de gêne.',
          'Il existe trois grandes familles : relaxation/massage, stimulation légère, et produits d\'accompagnement.',
          'Choisis selon tes propres envies du moment, pas selon les tendances ou les avis des autres.',
          'Privilégie la simplicité, la discrétion et des matières de qualité (silicone médical, verre, acier).',
          'Il n\'y a pas de bonne façon de commencer — juste ton rythme, ta curiosité, et la bienveillance envers toi-même.',
        ],
      },
    ],
  },
  {
    slug: 'bien-etre-intime-femme',
    sections: [
      {
        type: 'h2',
        content: 'Ton corps n\'est pas un territoire inconnu',
      },
      {
        type: 'paragraph',
        content: 'Il y a quelque chose d\'un peu paradoxal dans le rapport que beaucoup de femmes entretiennent avec leur corps. On le voit chaque jour, on l\'habite depuis toujours — et pourtant, on peut se sentir étrangère à certaines de ses parties. Comme si certaines zones méritaient moins d\'attention, moins de soin, moins de curiosité.',
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas une question de volonté. C\'est le résultat de silences accumulés, d\'une éducation qui a longtemps préféré esquiver plutôt qu\'expliquer. On a grandi avec l\'idée que l\'intimité féminine était soit un sujet médical, soit un sujet tabou. Rarement un espace de connaissance de soi.',
      },
      {
        type: 'paragraph',
        content: 'Se reconnecter à son corps, c\'est justement décider de changer ça. Pas de façon spectaculaire — simplement en commençant à se regarder avec plus de bienveillance. À écouter ce qu\'on ressent. À considérer son corps non pas comme quelque chose à corriger ou à gérer, mais comme un endroit où il fait bon vivre.',
      },
      {
        type: 'h2',
        content: 'Dédramatiser le plaisir : il est temps',
      },
      {
        type: 'paragraph',
        content: 'Le plaisir féminin a longtemps été le grand absent des conversations sérieuses. On en parlait peu, on le minimisait, on le conditionnait à une multitude de facteurs — comme s\'il fallait le mériter, ou comme s\'il n\'était légitime que dans un certain cadre. Aujourd\'hui, les choses bougent. Et c\'est tant mieux.',
      },
      {
        type: 'paragraph',
        content: 'Parce que le plaisir, sous toutes ses formes, fait partie intégrante du bien-être. Ce n\'est pas anecdotique, ce n\'est pas superficiel. Des études le montrent depuis des années : une femme à l\'aise avec son intimité, qui se permet d\'explorer ce qui lui fait du bien, développe une confiance en elle plus solide, un rapport à son corps plus serein, et des relations — avec elle-même et avec les autres — plus épanouissantes.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'S\'accorder du plaisir, c\'est aussi un acte de confiance envers soi-même. C\'est se dire : mes besoins comptent. Commencez par de petits gestes doux — un soin, un moment rien que pour vous — et laissez cette bienveillance s\'installer naturellement.',
      },
      {
        type: 'h2',
        content: 'Des gestes simples pour prendre soin de son intimité au quotidien',
      },
      {
        type: 'paragraph',
        content: 'Prendre soin de son bien-être intime féminin ne demande pas de bouleverser sa vie. Ça commence souvent par des petits gestes, des habitudes douces qu\'on intègre naturellement dans son quotidien. L\'une des premières choses, c\'est de ralentir. Dans un monde qui valorise la productivité à tout prix, s\'accorder un moment rien que pour soi — un bain, une routine de soin, un instant de calme — est déjà un acte puissant. Ce n\'est pas de l\'égoïsme, c\'est de la sagesse.',
      },
      {
        type: 'paragraph',
        content: 'Choisir des produits adaptés à son corps est aussi une forme de respect envers soi. Des soins doux, pensés pour l\'intimité, des matières de qualité qui respectent la peau et ses équilibres naturels. Il existe aujourd\'hui une belle gamme de produits de bien-être intime — huiles, soins, accessoires — conçus avec soin, loin des formules agressives et des designs froids. Des objets qui invitent à la douceur plutôt qu\'à la performance.',
      },
      {
        type: 'associatedProduct',
        productId: 'e2',
      },
      {
        type: 'paragraph',
        content: 'Et puis, il y a la respiration. Le mouvement. L\'écoute de son corps dans le silence. Pas besoin de pratiquer le yoga depuis dix ans pour commencer à se reconnecter à ses sensations. Quelques minutes, le soir, à poser les mains sur son ventre et à ressentir ce qui est là — tensions, légèreté, chaleur — suffisent déjà à changer la qualité de la relation qu\'on entretient avec soi-même.',
      },
      {
        type: 'h2',
        content: 'La confiance en soi commence là',
      },
      {
        type: 'paragraph',
        content: 'Il y a un lien direct — et souvent sous-estimé — entre le rapport qu\'on entretient avec son intimité et la confiance qu\'on se porte au quotidien. Quand on se sent bien dans son corps, quand on connaît ses besoins et qu\'on s\'autorise à les honorer, quelque chose change dans la façon dont on se présente au monde. On tient différemment sa place. On dit non plus facilement. On accueille le regard des autres sans se chercher de défauts.',
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas de la magie — c\'est simplement la conséquence logique d\'une relation à soi qui s\'est apaisée. Et cette confiance-là, elle rayonne. Elle influence la façon dont on vit ses relations amoureuses, dont on communique ses désirs, dont on reçoit de l\'affection. Une femme qui se connaît bien, qui a appris à s\'écouter, est aussi une femme qui sait mieux ce qu\'elle veut — et qui n\'a plus peur de le dire.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'Se reconnecter à son corps, c\'est choisir la bienveillance plutôt que le jugement.',
          'Le plaisir féminin est une composante à part entière du bien-être — pas un luxe.',
          'Ralentir et s\'accorder des moments rien que pour soi est un acte de sagesse, pas d\'égoïsme.',
          'Choisir des produits doux et adaptés, c\'est une forme de respect envers soi-même.',
          'La confiance en soi et le bien-être intime sont profondément liés — l\'un nourrit l\'autre.',
        ],
      },
      {
        type: 'h2',
        content: 'Un chemin, pas une destination',
      },
      {
        type: 'paragraph',
        content: 'Prendre soin de son bien-être intime, c\'est un chemin qui ne se termine jamais vraiment. Le corps change, les envies évoluent, les besoins se transforment avec les saisons de la vie. Et c\'est précisément ce qui rend ce chemin si riche.',
      },
      {
        type: 'paragraph',
        content: 'Il n\'y a pas de bonne façon de le parcourir. Pas de standard à atteindre, pas de case à cocher. Juste cette invitation, douce et persistante, à se tourner vers soi avec un peu plus de curiosité et beaucoup de tendresse.',
      },
      {
        type: 'paragraph',
        content: 'Parce que tu mérites, toi aussi, d\'être l\'objet de ta propre attention. Et quelque part, tout commence là.',
      },
    ],
  },
  {
    slug: 'communication-couple-intimite',
    sections: [
      {
        type: 'h2',
        content: 'Ce qu\'on ne dit pas finit toujours par peser',
      },
      {
        type: 'paragraph',
        content: 'Dans une relation, le silence peut être doux ou lourd. Le problème, c\'est qu\'on ne choisit pas toujours lequel s\'installe. Beaucoup de couples traversent des périodes où l\'intimité s\'érode sans qu\'on comprenne vraiment pourquoi. On se dit que c\'est la routine, le travail, la fatigue. C\'est parfois vrai. Mais souvent, c\'est surtout qu\'on a cessé de se parler de ce qui compte vraiment — de ses envies, de ses doutes, de ce qui nous ferait du bien.',
      },
      {
        type: 'paragraph',
        content: 'Les blocages sont rarement dramatiques. Ce sont des petites pudeurs accumulées, la peur de déranger, de paraître trop demandeur ou pas assez spontané. On finit par jouer un rôle, même avec la personne qu\'on aime le plus. Et ça, ça use.',
      },
      {
        type: 'h2',
        content: 'Parler de désir, ça s\'apprend (et c\'est moins effrayant qu\'on croit)',
      },
      {
        type: 'paragraph',
        content: 'Aborder ses désirs avec son partenaire, ça peut sembler intimidant. On craint le jugement, le maladroit "ah bon ?", le moment de flottement. Mais la vérité, c\'est que la grande majorité des conversations sur l\'intimité se passent infiniment mieux qu\'on ne l\'imaginait.',
      },
      {
        type: 'paragraph',
        content: 'Ce n\'est pas une question de trouver les mots parfaits. C\'est une question d\'oser les imparfaits — ceux qui viennent du cœur, même un peu hésitants. Une phrase comme "j\'aimerais qu\'on essaie quelque chose ensemble" ou "j\'ai besoin qu\'on prenne plus de temps pour nous" peut ouvrir des portes qu\'on croyait murées. Ce qui aide, c\'est de choisir le bon moment. Pas juste avant de dormir, pas après une journée tendue. Un moment calme, neutre, sans pression. Et surtout, d\'aborder la conversation avec de la curiosité plutôt qu\'avec des attentes.',
      },
      {
        type: 'tip',
        title: 'Le conseil Pomponette',
        content: 'Choisissez un moment calme, sans écrans ni pression. Commencez par exprimer ce que vous appréciez déjà dans votre relation avant d\'aborder ce que vous aimeriez explorer. La douceur dans l\'approche ouvre bien plus de portes que la revendication.',
      },
      {
        type: 'h2',
        content: 'La connexion, ça se cultive au quotidien',
      },
      {
        type: 'paragraph',
        content: 'On a longtemps cru que l\'intimité, ça se résumait aux grands moments. Les week-ends en amoureux, les nuits intenses, les déclarations. Mais la vraie connexion, elle se tisse dans les détails du quotidien. Un regard qui s\'attarde. Une question sincère posée au dîner. Un toucher qui ne demande rien mais qui dit je suis là. Ce sont ces micro-moments qui entretiennent le désir sur la durée, bien plus que les grands gestes ponctuels.',
      },
      {
        type: 'paragraph',
        content: 'Et parfois, c\'est aussi d\'introduire un peu de nouveauté dans la relation — pas forcément quelque chose de spectaculaire, mais quelque chose de différent. Découvrir ensemble un objet intime, un jeu de séduction, une idée qu\'on n\'aurait pas osé formuler seul… Ces petites aventures partagées ont ce pouvoir étrange de rapprocher. Pas parce qu\'elles changent tout, mais parce qu\'elles demandent une forme de confiance mutuelle. Et la confiance, c\'est exactement ce qui nourrit le désir.',
      },
      {
        type: 'associatedProduct',
        productId: 'd1',
      },
      {
        type: 'h2',
        content: 'Écouter autant que parler',
      },
      {
        type: 'paragraph',
        content: 'Une bonne communication dans le couple, ce n\'est pas un monologue à deux voix. C\'est aussi — et peut-être surtout — savoir écouter. Écouter sans préparer sa réponse pendant que l\'autre parle. Écouter sans minimiser ce qui est dit. Écouter avec cette intention simple : comprendre ce que vit l\'autre, pas le corriger.',
      },
      {
        type: 'paragraph',
        content: 'Quand votre partenaire vous parle de ce qu\'il ou elle ressent dans votre relation, c\'est un cadeau. Même si c\'est inconfortable. Même si ça remet en question des habitudes. Accueillir cette parole sans se braquer, c\'est l\'un des actes les plus intimes qui soit. Et souvent, c\'est là que tout bascule. Pas dans un sens dramatique — dans un sens lumineux. Quand on se sent vraiment entendu par l\'autre, quelque chose se détend. Une légèreté revient. Et avec elle, le désir de se retrouver.',
      },
      {
        type: 'keyTakeaway',
        title: 'À retenir',
        items: [
          'Les non-dits s\'accumulent et érodent l\'intimité — mieux vaut des mots imparfaits que le silence.',
          'Parler de ses désirs se passe presque toujours mieux qu\'on ne l\'imaginait.',
          'La vraie connexion se tisse dans les petits gestes du quotidien, pas seulement dans les grands moments.',
          'Écouter vraiment — sans préparer sa réponse — est l\'un des actes les plus intimes du couple.',
          'L\'intimité épanouie ne tombe pas du ciel : elle se choisit, se construit, se réinvente.',
        ],
      },
      {
        type: 'h2',
        content: 'Pour aller plus loin',
      },
      {
        type: 'paragraph',
        content: 'La communication n\'est pas une solution miracle. C\'est une pratique — imparfaite, vivante, qui évolue avec vous. Il y aura des conversations maladroites, des silences encore embarrassants, des tentatives qui tombent à plat. Ça fait partie du voyage.',
      },
      {
        type: 'paragraph',
        content: 'Ce qui compte, c\'est de garder ce mouvement vers l\'autre. De ne pas laisser l\'essentiel s\'effacer sous le poids des non-dits. Parce qu\'une intimité épanouie ne tombe pas du ciel — elle se choisit, se construit, se réinvente. Et quelque part, c\'est ça qui la rend si précieuse.',
      },
    ],
  },
];
