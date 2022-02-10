use wasm_bindgen::prelude::{wasm_bindgen,JsValue};
use js_sys::{Array};

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn one2three() -> JsValue {
  let vertices: [f64; 3] = [1.0, 2.0, 3.0];
  return JsValue::from(&vertices.into_iter().map(|x| JsValue::from_f64(x as f64)).collect::<Array>());
}