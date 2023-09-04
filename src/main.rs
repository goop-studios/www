use yew::prelude::*;

#[function_component]
fn Hello() -> Html {
    html! {
        <div>
            <h1>{ "Hello World!" }</h1>
            <p>{ "This is a paragraph." }</p>
        </div>
    }
}


fn main() {
    yew::Renderer::<Hello>::new().render();
}