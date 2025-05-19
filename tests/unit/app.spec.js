import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Santander from "@/pages/santander/index.vue";

describe('Santander Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Santander);
  });

  it('renders the correct text in the header', () => {
    const header = wrapper.find('h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Santander');
  });

  it('renders the correct button text', () => {
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Click me');
  });

  it('emits the "clicked" event when the button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted().clicked).toBeTruthy();
    expect(wrapper.emitted().clicked.length).toBe(1);
  });

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });
});