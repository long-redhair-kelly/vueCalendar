import { render } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import Calendar from "../src/components/Calendar";

describe("Calendar.vue", () => {
  const wrapper = render(Calendar);
  it("Calendar スナップショット", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("コンポーネントを描画できる", () => {
    // Componentを描画できる
    const wrapper = mount(Calendar);
    const comp = wrapper.findComponent(Calendar);
    expect(comp.exists()).toBe(true);
  });
});
