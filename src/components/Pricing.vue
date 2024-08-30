<template>
  <section class="py-24">
    <div class="container mx-auto">
      <h2
        class="text-center font-bold text-3xl md:text-[50px] md:leading-[60px] tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 w-[80%] mx-auto lg:w-full">
        Pricing
      </h2>
      <p
        class="text-center text-[18px]led leading-[22px] tracking-tight text-[#010D3E] mt-4 w-[80%] mx-auto font-medium">
        Freee forever. Upgrade for unlimited tasks, better sucurity,
        and excluciv feature.
      </p>
      <div class="py-8 flex flex-col">
        <div
          v-for="plan in pricing"
          :key="plan.plan"
          class="p-10 rounded-xl my-8 shadow-current sm:border border-[#F1F1F1]">
          <h2 class="text-lg font-bold text-black/70">
            {{ plan.plan }}
          </h2>
          <div>
            <span
              class="text-4xl tracking-tight font-bold leading-none"
              >{{ plan.price }}</span
            >
            <span
              v-if="plan.plan !== 'Free'"
              class="tracking-tight font-bold text-black/50"
              >/month</span
            >
          </div>
          <p class="font-normal mt-3">{{ plan.description }}</p>
          <ul class="flex flex-col gap-4 mt-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="text-sm font-normal flex items-center gap-2">
              <img
                src="../assets/check.svg"
                alt="Check image"
                class="h-6 w-6" />{{ feature }}
            </li>
          </ul>
          <button
            class="bg-black hover:bg-black/80 w-full text-white px-4 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center mt-[30px]"
            :disabled="plan.plan === 'Free'">
            {{ plan.buttonText }}
          </button>
        </div>
      </div>
      <!-- <h2>{{ pricing[0].plan }}</h2>
      <div>
        <span>{{ pricing[0].description }}</span>
        <span>/month</span>
      </div>
      <button>Let's start</button>
      <ul v-for="(item, index) in pricing">
        <li>{{ item }}</li>
      </ul> -->
    </div>
  </section>
</template>
<script setup>
const pricing = [
  {
    plan: "Free",
    price: "$0",
    description: "Get started with basic features.",
    buttonText: "Get started for free",
    features: [
      "Access to basic Q&A features",
      "Limited AI-powered analysis",
      "Email support",
      "Community access",
    ],
  },
  {
    plan: "One Time",
    price: "$99",
    description: "One-time payment for extended features.",
    buttonText: "Let's choose lifetime Plan",
    features: [
      "Full access to Q&A features",
      "Advanced AI-powered analysis",
      "Priority email support",
      "Event customization options",
    ],
  },
  {
    plan: "Business",
    price: "$299",
    description: "For businesses that need advanced capabilities.",
    buttonText: "Business Plan",
    features: [
      "Unlimited Q&A sessions",
      "Real-time AI-powered analysis",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom integration and API access",
    ],
  },
];
</script>
