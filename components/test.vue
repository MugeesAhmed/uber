<template>
    <div>
        <div class="collapse" open>
            <summary class="title">Lorem.</summary>
            <hr class="divider">
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias, iusto optio labore officiis repudiandae error consectetur deleniti, at molestiae rem? Soluta consectetur excepturi dicta fugiat laboriosam dolorum delectus atque!
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Quia, deleniti.</summary>
            <hr class="divider">
            <p class="description">
              Corrupti aut quisquam pariatur expedita accusantium quidem illum exercitationem? Sit, delectus id, voluptate dicta tempore fugiat laboriosam accusamus at unde mollitia et a iusto nesciunt praesentium itaque laudantium molestias beatae.
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Dolor, rem eligendi.</summary>
            <hr class="divider">
            <p class="description">
              Perferendis quod ab voluptatum sequi recusandae fuga non magni, fugit quos id nobis officia voluptatibus, ut ipsum dignissimos? Rerum hic fugit aliquam alias a aspernatur magni veritatis! Incidunt, similique cum.
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Officia vitae eveniet saepe.</summary>
            <hr class="divider">
            <p class="description">
              Nostrum repudiandae, earum quaerat optio eligendi quo repellendus eum itaque delectus quis facilis assumenda corporis doloribus accusantium. Magnam vel voluptas cum repellendus veniam aut architecto. Aperiam animi ipsa in ducimus!
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Facilis ipsum corporis aliquid veniam.</summary>
            <hr class="divider">
            <p class="description">
              Temporibus sunt nam nihil veritatis fugit commodi atque amet, soluta vitae veniam quod ducimus illum possimus esse facilis, facere unde modi? Minus similique nihil explicabo omnis corrupti vero velit consectetur.
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Delectus sit quo labore commodi non!</summary>
            <hr class="divider">
            <p class="description">
              Corporis, eos animi! Asperiores nisi, cum, voluptates porro quis incidunt ipsa sed delectus voluptatem, quas temporibus velit labore? Ipsa officiis officia magnam ullam dolores. Temporibus itaque sapiente mollitia amet ea.
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Doloremque fugit id repudiandae voluptatibus repellendus eligendi?</summary>
            <hr class="divider">
            <p class="description">
              Pariatur reprehenderit soluta cum totam. Modi autem fugiat consequuntur minima, sint vitae cum porro excepturi deserunt ipsa dolorem quasi magnam, ea dolorum odio necessitatibus alias nobis iusto. Aspernatur, quidem explicabo.
            </p>
          </div>
          
          <div class="collapse">
            <summary class="title">Molestias, impedit eum nemo modi quasi placeat iusto!</summary>
            <hr class="divider">
            <p class="description">
              Suscipit aut molestiae ullam unde aspernatur quisquam quis dolore qui deserunt eius odit, debitis nemo expedita earum cum commodi quaerat, blanditiis iusto voluptas reiciendis? Repellat sunt harum quia saepe tempora.
            </p>
          </div>
    </div>
</template>
<style>
    details summary {
        list-style: inside none;
    }
    .items-collapse .collapse {
        --sp-sm: 1.8rem;
        --sp-md: 2.4rem;
        width: 100%;
        max-width: 72rem;
        margin: 0 auto;
        border-radius: 0.8rem;
        border: 0.1rem solid #fafafa;
        box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.25);
        background-color: #f5f4f9;
        transition: box-shadow 250ms;
        will-change: box-shadow;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .items-collapse .collapse:hover {
        box-shadow: 0.1rem 0.1rem 1.8rem rgba(0, 0, 0, 0.25);
    }
    .items-collapse .collapse .title {
        position: relative;
        padding: var(--sp-md);
        font-size: 1.8rem;
        font-weight: 700;
        user-select: none;
        cursor: pointer;
    }
    .items-collapse .collapse .title::after {
        content: "→";
        position: absolute;
        right: var(--sp-md);
        top: 50%;
        transform: translateY(-50%);
    }
    .items-collapse .collapse[open] .title::after {
        content: "↓";
    }
    .items-collapse .collapse .divider {
        margin: 0 var(--sp-md);
        border-radius: 99em;
        border: 0.1rem solid currentColor;
        background: currentColor;
        color: #e1e1e1;
    }
    .items-collapse .collapse .description {
        padding: var(--sp-md);
        margin: 0;
        font-size: 1.4rem;
    }
    .items-collapse .collapse .description:not(:first-of-type) {
        padding-top: 0;
    }
</style>