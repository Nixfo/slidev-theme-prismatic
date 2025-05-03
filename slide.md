---
layout: four-cards
title: four-cards usage
---

::card1::
### Card 1
First card content...

::card2::
### Card 2
Second card content...

::card3::
### Card 3
Third card content...
```ts
import * as fs from node:fs

main(): void {
    console.log('main ahah');
    let x = 0;
    x++;
} 
```

::card4::
### Card 4
Fourth card content...

---
layout: default
---

# IconBlock usage

<IconBlock color="red" icon="i-carbon:chart-maximum" title="Performances" class='mb-2'>
  Detailled content of the performances...
</IconBlock>

<IconBlock color="blue" icon="i-carbon:idea" title="Innovation" class='mb-2'>
  Description of a new idea...
</IconBlock>

<IconBlock color="green" icon="i-carbon:growth" title="Growth" class='mb-2'>
  See my repository at GitHub using`GithubStars` <GithubStars stars="104.8k" repo="microsoft/TypeScript" />
</IconBlock>

<IconBlock color="violet" icon="i-carbon:code" title="Code" class='mb-2'>
  Code block inside
```ts
const i = 0;
```
</IconBlock>
