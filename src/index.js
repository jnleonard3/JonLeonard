import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './root'

export default function render(locals, callback) {
	var html = ReactDOMServer.renderToStaticMarkup(<Root/>);
    callback(null, '<!DOCTYPE html>' + html)
}