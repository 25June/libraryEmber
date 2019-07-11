import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['A', 'B', 'C', 'D'];
    },

    newmodel() {
        return ['E', 'F', 'G', 'H'];
    }
});
