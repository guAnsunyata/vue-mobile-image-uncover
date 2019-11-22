# vue-mobile-image-uncover
The simplest solution for putting varius ratio images, which you don't want to break your layout.

[Live Demo](https://guansunyata.me/guansunyata/vue-mobile-image-uncover)


(WIP)

## Usage
```
import { UncoverList, UncoverImage } from 'vue-mobile-image-uncover';

export default {
  ...
  components: {
    UncoverList,
    UncoverImage,
  },
  ...
}
```

### Example
```html
// UncoverList: the relative wrapper, which positioning the image during the animating
<UncoverList>
  <template slot-scope="{ togglePopup }">

    // UncoverImage: set a fixed height for the image in various ratio
    <UncoverImage
      image-url="http://example.com/example.png"
      height="220"
      @pop-image="togglePopup"
    />
  </template>
</UncoverList>
```
