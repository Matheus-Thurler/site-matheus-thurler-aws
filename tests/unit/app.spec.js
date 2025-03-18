import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Santander from "@/pages/santander/index.vue";


describe('@/pages/santander/index.vue', () => {
  it('renders the correct text', () => {
    const wrapper = mount(Santander);
    expect(wrapper.text()).toContain('Santander');
  });
});