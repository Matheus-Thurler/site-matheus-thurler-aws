import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Santander from "@/pages/santander/index.vue";

describe('Santander Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Santander);
  });

  it('renders the correct text in the header', async () => {
    // Adiciona uma pausa de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    const header = wrapper.find('h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Santander');
  });

  it('renders the correct button text', async () => {
    // Adiciona uma pausa de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Click me');
  });

  it('emits an event when the button is clicked', async () => {
    // Adiciona uma pausa de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simula o clique no botão
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted().clicked).toBeTruthy();
  });
});
