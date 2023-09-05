use yew::prelude::*;
use stylist::yew::*;


#[function_component(Navigation)]
fn navigation() -> Html {
    let name = use_style! {
        font-size: 24px;
        font-family: "Inter", sans-serif;
        padding: 0px;
        margin: 0px;
        text-align: left;
        user-select: none;
        a {
            color: black;
            text-decoration: none;
        }
    };

    let nav = use_style! {
        font-size: 16px;
        font-family: "Inter", sans-serif;
        padding: 0px;
        margin: 0px;
        min-height: 50px;
        text-align: left;
        user-select: none;
        li { display: inline-flex; }
        li > a {
            padding: 0px 10px;
        }
    };
    html! {
        <nav class={nav}>
            <header>
                <li class={name}><a href="#">{ "goop studios" }</a></li>
                <li><a href="/about">{ "About" }</a></li>
                <li><a href="#contact">{ "Contact" }</a></li>
                <li><a href="/blog">{ "Blog" }</a></li>
            </header>
            <hr/>
        </nav>
    }
}

#[function_component(Body)]
fn body() -> Html {
    let style = use_style! {
        color: green;
        font-size: 23px;
        min-height: 50vh;
        font-family: "Inter", sans-serif;
        text-align: center;
    };
    html! {
    <>
        <span>
            <div class={style}>
                <h1>{ "Hello World!" }</h1>
                <p>{ "This is a paragraph." }</p>
            </div>
        </span>
    </>

    }
}


#[function_component(Contact)]
fn contact() -> Html {
    let contact = use_style! {
        font-size: 16px;
        font-family: "Inter", sans-serif;
        margin-top: auto;
        user-select: none;
        li { list-style: none; }
        margin-left: 50%;
        padding: 0px;
    };
    html! {
        <div class={contact}>
            { "Contact" }
            <ul>
                <li><a href="mailto:example@example.org">{ "Email" }</a></li>
                <li>{ "Phone: 123-456-7890" }</li>
            </ul>
        </div>
    }
}

#[function_component(Index)]
pub fn main() -> Html {
    let main = use_style! {
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100vh;
    };
    html! {
        <html class={main}>
            <Navigation/>
            <Body/>
            <Contact/>
        </html>
    }
}