# Angular Rendering Demo - Code Camp 2025

This repository contains the demo code for the talk "Fine-Grained Reactivity with Signals" presented by Javier Carrion at Code Camp 2025.

It provides a simple visual illustration of the difference between traditional **coarse-grained** change detection (powered by Zone.js) and Angular's newer **fine-grained** reactivity system using Signals.

## Purpose

The goal of this demo is to showcase:

1. **Coarse-Grained Reactivity (Zone.js):** How changes in one component can trigger change detection checks across a wider component subtree, even in unrelated components within that path.

2. **Fine-Grained Reactivity (Signals):** How Angular Signals enable updates only in the specific components or effects that directly consume the changed signal, leading to potentially more performant updates.

3. **Angular Signal Implementation:** Basic usage of `signal()`, `effect()`, `update()`, and passing signals via `@Input()`.

4. **Visual Comparison:** Using highlighting (red borders) to visually represent which components are checked or reacting during state updates in both models.

5. **Two-Way Binding with Signals:** Demonstrating how to achieve two-way binding manually, given the unidirectional nature of signals.

## Demo Examples Included

The main application (`app.component.html`) displays two columns side-by-side:

**Left Column:**

* **(Coarse-grained):** Uses standard component properties and Zone.js-based change detection.

  * `OuterCounterComponent`: Holds a counter, passes it down.

  * `InnerCounterComponent`: Receives the counter via `@Input`.

  * `UnrelatedElementComponent`: Sits alongside the inner component, has no direct dependency on the counter.

* **(Fine-grained):** Uses Angular Signals for state management.

  * `OuterCounterSignalComponent`: Holds a counter `signal`, passes the signal down.

  * `InnerCounterSignalComponent`: Receives the counter `signal` via `@Input` and uses an `effect` to react.

  * `UnrelatedElementSignalComponent`: Sits alongside the inner component, isolated from the counter signal updates.

**Visual Cue:** When the "Increase" button is clicked in either column, components involved in the update/check cycle will briefly flash a red border. Observe the *scope* of this highlighting in each column.

* **Coarse-grained:** Expect Outer, Inner, *and* Unrelated components to highlight.

* **Fine-grained:** Expect Outer (initiator) and Inner (consumer via `effect`) to highlight, but *not* the Unrelated component.

The **Right Column outmost** section demonstrates a simple two-way binding implementation using a signal.

## How to Run

This project uses the Angular CLI.

1. **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd angular-rendering-demo
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

    *(Or `yarn install`)*
4. **Start the development server:**

    ```bash
    ng serve
    ```

    *(Or `yarn start`)*

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

---

## About the Presenter / Contact

Feel free to connect or reach out!

* **Presenter:** Javier 'Javi' Carrion
* **Twitter:** [@seetechnologic](https://twitter.com/seetechnologic)
* **GitHub:** [JavaVista](https://github.com/JavaVista/)
* **LinkedIn:** [Javier Carrion](https://www.linkedin.com/in/technologic)
* **GDG Central Florida Discord:** [Join the Community](https://discord.gg/4v5wPtPt)

Thanks for attending the talk!
