import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'USER',
    welcome_msg: 'Welcome to the Feedback-App'
	}
});

export default app;
