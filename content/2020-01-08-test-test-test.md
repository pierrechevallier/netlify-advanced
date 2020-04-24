---
layout: blog
title: Test chart
author: Pierre
date: 2020-01-08T11:00:00.998Z
cover: /images/uploads/d3.png
rating: 5
category: chart
tags:
  - programming
  - webpack
  - debugging
  - react
---
# A tale of 2 tables

There are 2 types of users of table:

1. One that quickly look at it to find its information and move on
2. One that works extensively with the table

While most UI guides online recommend a lean design, without the clutter of a big table with numbers, I will explain how to design your tables for power users.

## A. Who ? Why ?

If you want to design applications for accountants, meteorologist or anybody needing to look at a lot of number, they will need to have all of them in front. That means that you need to think about how to display efficiently and nicely a big table with a lot of data.

At that point, nice UI and neat presentation are not on the agenda, when you work 8 hours on tables and data, you need to be efficient and not to scroll endlessly to access what you want or worse, have to constantly filter all the data you are interested in.

This example of https://refactoringui.com/ is for me a bit too reductive, and can apply to quick view of your website or limited data interactions. Notice the increase in size of the table too:

![](C:\Users\pierr\Documents\Web\PostScreenshots\refactoringUI.png)

## B. Real world examples

Usually you will find big tables on specialised platform and enterprise software, but I found that https://fivethirtyeight.com/ has actually done the best job in terms of table design !

Here is an example from their website, which does a good job at big tables, look at cropped example in a Michael Jordan's article : [https://fivethirtyeight.com/features/why-michael-jordan-was-the-best/](https://fivethirtyeight.com/features/why-michael-jordan-was-the-best)

![Michael Jordan](C:\Users\pierr\Documents\Web\PostScreenshots\5firty8.png)

While here we are looking at a table of a news website, we can derive a good idea to build our own tables.

## C. From fat table to lean table

I will expand from the FiveThirtyEight example and show my interpretation of a good table. I think we can make them better, for me, I would favor a hover on the rows to make it easier to identify.

One of the few good features to display a lot of data is to merely... Have a smaller cells and letters, so I would recommend to reduce the font size of the table (use 

[rem]: https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem

units to scale them depending on the size of your website font size):

```css
table {
	/*Some other properties...*/
    font-size: 0.7rem;
}
```

In general I like the idea of having the head of the table as uppercase words and maybe slightly bigger to make them stick out better, so nothing too complicated, we can just style the head of the table with this:

```css
th {
    /*Some other properties...*/
    font-size: .8rem;
    text-transform: uppercase;
}
```

To top it, here, nothing too fancy, just a hover with a slight alpha layer on the table rows.  We want something to be applied only to the body of the table and have neat table rows. And voila:

```css
tbody>tr::hover {
    background-color: rgba(155,155,155,.2);
}
```

Now this table would be the same as the one on top:

| Date       | Open  | High  | Low   | Close | Adj Close | Volume |
| ---------- | ----- | ----- | ----- | ----- | --------- | ------ |
| 2019-04-24 | 26651 | 26694 | 26518 | 26541 | 26541     | 165638 |
| 2019-04-25 | 26536 | 26577 | 26292 | 26440 | 26440     | 139857 |
| 2019-04-26 | 26415 | 26530 | 26346 | 26517 | 26517     | 189570 |
| 2019-04-29 | 26500 | 26584 | 26484 | 26548 | 26548     | 168330 |
| 2019-04-30 | 26562 | 26653 | 26398 | 26584 | 26584     | 117095 |
| 2019-05-01 | 26646 | 26691 | 26333 | 26390 | 26390     | 186152 |
| 2019-05-02 | 26339 | 26461 | 26148 | 26265 | 26265     | 178492 |
| 2019-05-03 | 26273 | 26518 | 26245 | 26499 | 26499     | 258245 |
| 2019-05-06 | 26284 | 26447 | 25932 | 26405 | 26405     | 169687 |
| 2019-05-07 | 26220 | 26394 | 25751 | 25973 | 25973     | 282576 |
| 2019-05-08 | 25947 | 26079 | 25799 | 26014 | 26014     | 378147 |
| 2019-05-09 | 25983 | 25994 | 25500 | 25816 | 25816     | 306195 |
| 2019-05-10 | 25796 | 26016 | 25464 | 25964 | 25964     | 364960 |
| 2019-05-13 | 25764 | 25818 | 25215 | 25281 | 25281     | 368236 |
| 2019-05-14 | 25278 | 25677 | 25217 | 25570 | 25570     | 357279 |
| 2019-05-15 | 25569 | 25714 | 25326 | 25674 | 25674     | 250534 |
| 2019-05-16 | 25670 | 25955 | 25554 | 25867 | 25867     | 255281 |
| 2019-05-17 | 25879 | 25949 | 25628 | 25780 | 25780     | 232025 |
| 2019-05-20 | 25776 | 25901 | 25554 | 25696 | 25696     | 280261 |
| 2019-05-21 | 25719 | 25895 | 25711 | 25875 | 25875     | 246483 |
| 2019-05-22 | 25860 | 25904 | 25733 | 25771 | 25771     | 208634 |
| 2019-05-23 | 25779 | 25779 | 25320 | 25463 | 25463     | 196584 |

This would be the example, you can find an example in React and css at this repo: 

You can browse the table, identify easily the rows and have plenty of data to display to your users. I think it is a great addition to the components a website could have, and especially if you design something for data savvy people.

# Now some personal news

During the second part of 2019 I managed to build this website, piece by piece, to have a look that would suit what I want and some functionalities that I sought for.

One of the main goal is to cover basic statistics and analytics, common programming tasks encountered in life. But above all it is a place where I want to journal issues that I found interesting or small applications that I think could be beneficial - at least - for me and perhaps for others.

Over the Christmas holidays I started to create a small tool to cover basic exploration for data analysis: which techniques are the most useful to uncover *hidden gems* in your data. While the tool covers the broad scenario, it doesn't do everything needed for an exploratory analysis, but is rather a good bookmark when you are not sure how to approach the analysis of the problem.

You can find it at [https://www.chevallier.dev/statistics/](https://www.chevallier.dev/statistics) and it works by selecting the type of variable you would like to analyse.

I'll make a comprehensive guide in the weeks to come and shall enrich piece by piece.