---
layout: default
---

# ContentCard examples

<ContentCard v-click color="blue" class="mb-2">

  ### Simple card without icon
  This card is blue and doesn't have an icon.

</ContentCard>

<ContentCard v-click color="red" icon="i-carbon:warning" class="mb-2">

  ### Card with icon
  This card is red and has an icon.
  
</ContentCard>

<ContentCard v-click color="green" icon="i-carbon:growth" title="Growth Statistics" class="mb-2">
  This card is green and uses the title prop for a consistent title style.
</ContentCard>
