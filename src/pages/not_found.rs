use yew::prelude::*;

#[function_component(NotFound)]
pub fn main() -> Html {
    html! {
        <div>
            <h1>{ "Error 404" }</h1>
            <p>{ "Not found..." }</p>
        </div>
    }
}