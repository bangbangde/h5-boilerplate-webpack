const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pages = fs.readdirSync(path.resolve('../src', 'pages'));

function genEntryMap () {
    let entries = {};
    pages.forEach(name => {
        entries[name] = path.resolve('../src', 'pages', name, 'index.js');
    });
    return entries;
}

function htmlPlugins() {
    return pages.map(name =>{
        let param = {
            filename: name + '.html',
            title: 'h5',
            // favicon: '',
            meta: {
                viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
            },
            chunks: ['runtime', 'vendors', name],
        };
        try {
            fs.accessSync(param.template)
        }catch(e){
            delete param.template;
        }
        return new HtmlWebpackPlugin(param);
    })
}

module.exports = {genEntryMap, htmlPlugins};