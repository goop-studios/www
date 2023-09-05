use yew::{
    Renderer,
    prelude::*
};
use yew_router::prelude::*;
mod pages;
use pages::{
    about::About,
    blog::Blog,
    index::Index,
    not_found::NotFound,
};

#[derive(Debug, Clone, Copy, PartialEq, Routable)]
pub enum Route {
    #[at("/")]
    Index,
    #[at("/about")]
    About,
    #[at("/blog")]
    Blog,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[function_component(Main)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Index => html! { <Index /> },
        Route::About => html! { <About /> },
        Route::Blog => html! { <Blog /> },
        Route::NotFound => html! { <NotFound /> },
    }
}

fn main() {
    Renderer::<Main>::new().render();
}