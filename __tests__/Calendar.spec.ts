import { render } from "@testing-library/vue";
import Calendar from "../src/components/Calendar";

describe("Calendar.vue", () => {
  it("Calendar スナップショット(currentDateだけがNGの場合「yarn test:update」を実施)", () => {
    const wrapper = render(Calendar);
    expect(wrapper).toMatchSnapshot();
  });
});
