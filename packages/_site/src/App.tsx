import * as stylex from '@stylexjs/stylex';

import { Label } from "@controlkit/label";
import { Button, ButtonVariants } from "@controlkit/button";

const styles = stylex.create({
  large: {
    fontSize: "12rem",
  },

  highlighted: {
    color: "green",
  }
});

function App() {
  return (
    <div>
      <Label
        extend={[
          styles.large,
          // styles.highlighted
        ]}
        htmlFor='test'
      >
        Test
      </Label>
      <input id="test" type="text" />

      <Button
        onClick={(e) => {
          console.log(e);
        }}
      >
        Create
      </Button>

      <Button fullWidth>Create</Button>

      <Button disabled>Create</Button>

      <Button
        variant={ButtonVariants.ACTION}
      >
        Action
      </Button>

      <Button
        variant={ButtonVariants.DANGER}
      >
        Danger
      </Button>

      <Button
        variant={ButtonVariants.GHOST}
      >
        Ghost
      </Button>

      <Button
        variant={ButtonVariants.OUTLINE}
      >
        Danger
      </Button>



    </div >
  )
}

export default App
