const { KEY_NEWSDATA } = require("./config/config");
const { default: axios } = require("axios");

module.exports = {
  list: async () => {
    const to_return = [
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
      {
        title: "Seventeen Perish In Bauchi Road Crash",
        description:
          "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
        pubication_date: "2023-03-15",
        creator: null,
        source_id: "tori",
        link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
        image_url: null,

        language: "english",
      },
    ];
    return { result: true, data: to_return };
    // try {
    //   const headers = {
    //     "X-ACCESS-KEY": KEY_NEWSDATA,
    //   };
    //   const queryOptions = {
    //     language: "language=en",
    //   };

    //   // const news = await axios.get(
    //   `https://newsdata.io/api/1/news?${queryOptions.language}`,
    //   {
    //     headers,
    //   }
    // );

    // if (news.status !== 200) {
    //   console.log(news);
    //   throw new Error("It was not possible to retrieve the latest news");
    // }

    // const to_return = news.data.results.map((n) => {
    //   return {
    //     title: n.title,

    //     description: n.description,

    //     pubication_date: n.pubDate.split(" ")[0],

    //     creator: n?.creator,

    //     source_id: n.source_id,

    //     link: n.link,

    //     image_url: n.image_url,

    //     category: n.category,

    //     country: n.country,

    //     language: n.language,
    //   };
    // });

    //   const to_return = [
    //     {
    //       title: "Seventeen Perish In Bauchi Road Crash",
    //       description:
    //         "The other crash at Manaba on Zaki-Gamawa road involved 25, killing 11 people and 13 seriously wounded.",
    //       pubication_date: "2023-03-15",
    //       creator: null,
    //       source_id: "tori",
    //       link: "https://www.tori.ng/news/230164/seventeen-perish-in-bauchi-road-crash.html",
    //       image_url: null,

    //       language: "english",
    //     },
    //   ];
    //   return { result: true, data: to_return, length: news.data.length };
    // } catch (error) {
    //   return { result: false, message: error };
    // }
  },
};
