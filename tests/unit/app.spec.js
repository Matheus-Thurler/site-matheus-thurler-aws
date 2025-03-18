import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Santander from "@/pages/santander/index.vue";


describe('@/pages/santander/index.vue', () => {
  it('renders the h1 with the correct text', () => {
    const wrapper = mount(Santander);
    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('Santander');
  });
});