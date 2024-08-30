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
          :class="
            twMerge(
              'p-10 border shadow-[0_7px_14px_#eaeaea] rounded-xl my-8 mx-4 sm:border border-[#F1F1F1]',
              plan.inverse === true && 'bg-black text-white'
            )
          ">
          <h2
            :class="
              twMerge(
                'text-xl py-1 font-bold text-black/70 mb-4',
                plan.inverse && 'text-white/50',
                plan.popular &&
                  'bg-gradient-to-b from-[#b921bc] via-[#bed76d] to-[#2caaee] text-transparent bg-clip-text'
              )
            ">
            {{ plan.plan }}
          </h2>
          <div>
            <span
              class="text-4xl tracking-tight font-bold leading-none"
              >{{ plan.price }}</span
            >
            <span
              v-if="plan.plan !== 'Free'"
              :class="
                twMerge(
                  'tracking-tight font-bold text-black/50',
                  plan.inverse && 'text-white/50'
                )
              "
              >/month</span
            >
          </div>
          <p class="font-normal mt-2">{{ plan.description }}</p>
          <ul class="flex flex-col gap-2 mt-6">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="text-sm font-normal flex items-center gap-2">
              <CheckSvg class="h-6 w-6" color="text-white" />
              {{ feature }}
            </li>
          </ul>
          <button
            :class="
              twMerge(
                'bg-black hover:bg-black/80 w-full text-white px-4 py-2 font-medium rounded-lg tracking-tight inline-flex items-center justify-center mt-[30px]',
                plan.inverse === true &&
                  'bg-white text-black hover:bg-slate-700'
              )
            "
            :disabled="plan.plan === 'Free'">
            {{ plan.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { twMerge } from "tailwind-merge";
import CheckSvg from "../assets/check-svg.vue";

const pricing = [
  {
    plan: "Free",
    price: "$0",
    description: "Get started with basic features.",
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
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
    inverse: false,
    popular: false,
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
    inverse: true,
    popular: true,
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

<style>
.text-gradient {
  background: #ac3bcf;
  background: linear-gradient(
    to right,
    #ac3bcf 0%,
    #7bff77 50%,
    #cf1512 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
