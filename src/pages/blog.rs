use yew::prelude::*;

#[function_component(Blog)]
pub fn main() -> Html {
    html! {
        <div>
            <h1>{ "Blog" }</h1>
            <p>{ "This is the blog page." }</p>
        </div>
    }
}