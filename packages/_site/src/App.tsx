import * as stylex from '@stylexjs/stylex';

import { Label } from "@controlkit/label";

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
    </div>
  )
}

export default App
