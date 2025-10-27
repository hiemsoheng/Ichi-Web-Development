
const fetchAPI = async () => {
  // Web Products Data
  const webdata = [
    {
      id: 1,
      name: "Coffee Web",
      description: "Welcome to our coffee website!",
      price: 29.99,
      image:
        "https://templatetoaster.com/wp-content/uploads/2019/05/Mocha-Coffee-Shop-PrestaShop-Theme.jpg",
      size: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "Food Web",
      description: "Welcome to our delicious food website!",
      price: 39.99,
      image:
        "https://i.pinimg.com/736x/20/c6/6a/20c66a7cbbc7839fcc79ea1c13674478.jpg",
      size: ["M", "L", "XL"],
    },
    {
      id: 3,
      name: "School Web",
      description: "Welcome to our educational school website!",
      price: 49.99,
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/kingster-school-website-template.jpg",
      size: ["S", "L"],
    },
    {
      id: 4,
      name: "Travel Web",
      description: "Welcome to our exciting travel website!",
      price: 59.99,
      image:
        "https://html.design/blog/wp-content/uploads/2024/06/Travel-Website.jpeg",
      size: ["M", "XL"],
    },
    {
    id: 5,
      name: "Fitness Web",
      description: "Welcome to our fitness and health website!",
      price: 69.99,
      image:
        "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2020/10/gym-website-template.jpg?fit=740%2C463&ssl=1",
      size: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "Photography Web",
      description: "Welcome to our stunning photography website!",
      price: 79.99,
      image:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/0d5439e677d5d93ef591e28a22eafde820521d76",
      size: ["S", "M", "L"],
    },
    {
      id: 7,
      name: "Music Web",
      description: "Welcome to our vibrant music website!",
      price: 89.99,
      image:
        "https://cdn.prod.website-files.com/64da807a9aa000087e97b92d/660ecc358777e8fbbd182040_6501fb793f9d29bdbb1d8659_singer128cover.jpeg",
      size: ["S", "M", "L"],
    },
    {
      id: 8,
      name: "E-commerce Web",
      description: "Welcome to our dynamic e-commerce website!",
      price: 99.99,
      image:
        "https://miro.medium.com/1*VNoETQG1aBwujmj9qMBbLQ.png",
      size: ["S", "M", "L"],
    },
    {
      id: 9,
      name: "Blog Web",
      description: "Welcome to our engaging blog website!",
      price: 49.99,
      image:
        "https://elements-resized.envatousercontent.com/elements-cover-images/20004094-eae5-4d63-8d73-888e68f2633c?w=433&cf_fit=scale-down&q=85&format=auto&s=0b9ac4d8bea56a508eaaa642ce8b0d7a3a1cca584bf59abfbbedd10aa80d9555",
      size: ["S", "M", "L"],
    },
    {
      id: 10,
      name: "Portfolio Web",
      description: "Welcome to our creative portfolio website!",
      price: 59.99,
      image:
        "https://www.entheosweb.com/wp-content/uploads/2024/06/Portfolio-design-website-templates-1.jpg",
      size: ["S", "M", "L"],
    },
    {
      id: 11,
      name: "Restaurant Web",
      description: "Welcome to our delicious restaurant website!",
      price: 49.99,
      image:
        "https://templatesjungle.com/wp-content/uploads/2022/03/FoodWagon-%E2%80%93-Free-Bootstrap-5-HTML5-Restaurant-Food-Website-Template-1024x768.jpg",
      size: ["S", "M", "L"],
    },
    {
      id: 12,
      name: "Event Web",
      description: "Welcome to our exciting event website!",
      price: 39.99,
      image:
        "https://elements-resized.envatousercontent.com/elements-cover-images/3b9648ff-7def-4ac5-a93b-b92dbcc86aa7?w=433&cf_fit=scale-down&q=85&format=auto&s=5d7b54026f5245d9beb61d5d46985d490b301609105ac1e0a7586298f5b0014d",
      size: ["S", "M", "L"],
    }
  ];

  // System Products Data
const systemdata = [
    {
      id: 1,
      name: "Coffee System",
      description: "Description for Coffee System",
      price: 99.99,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-maker-electronics-gadgets-sale-flyer-design-template-3501e8772ce75817c5f24d8b80d6c10c_screen.jpg?ts=1658592017",
      size: ["M", "L"],
    }
];

  return { webdata, systemdata};
};

export default fetchAPI;