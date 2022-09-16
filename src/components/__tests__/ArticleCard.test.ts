/**
 * @vitest-environment happy-dom
 */
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import ArticleCard from '../ArticleCard.vue';

describe('ArticleCard', () => {
    it('it should render properly', () => {
        const wrapper = mount(ArticleCard, { props: {
            showDate: true }
        });
        // expect(wrapper.text()).toContain('Hello Vitest');
    });
});
