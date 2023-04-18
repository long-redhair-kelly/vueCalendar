import { render } from "@testing-library/vue";
import { mount, shallowMount } from "@vue/test-utils";
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

describe("Calendar.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(Calendar);
  });

  it("カレンダーのヘッダーをレンダリング", () => {
    const header = wrapper.find("#main thead");
    expect(header.exists()).toBe(true);
  });

  it("ヘッダーに現在の月と年を表示", () => {
    const header = wrapper.find(".selected-month");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    expect(header.text()).toContain(`${currentYear}年${currentMonth}月`);
  });

  it("曜日表示", () => {
    const weekdays = wrapper.findAll("#main thead th");
    expect(weekdays).toHaveLength(7);
    expect(weekdays[0].text()).toBe("日");
    expect(weekdays[1].text()).toBe("月");
    expect(weekdays[2].text()).toBe("火");
    expect(weekdays[3].text()).toBe("水");
    expect(weekdays[4].text()).toBe("木");
    expect(weekdays[5].text()).toBe("金");
    expect(weekdays[6].text()).toBe("土");
  });

  it('ヘッダーの年月がクリックされたときに "date-click "イベントを発生させる', async () => {
    const yearMonth = wrapper.findAll(".selected-month").at(0);
    await yearMonth.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click").length).toBe(1);
  });
});
