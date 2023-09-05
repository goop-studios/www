use yew::prelude::*;

#[function_component(About)]
pub fn main() -> Html {
    html! {
        <div>
            <h1>{ "About" }</h1>
            <p>{ "This is the about page." }</p>
        </div>
    }
}