import React from 'react'

export default function Hero() {
  return (
    <section>
      This is a Hero Section
      <fieldset>
        <legend>Published status</legend>

        <input id="draft" class="peer/draft py-5" type="radio" name="status" checked />
        <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

        <input id="published" class="peer/published py-2" type="radio" name="status" />
        <label for="published" class="peer-checked/published:text-sky-500">Published</label>

        <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
        <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
      </fieldset>
    </section>
  )
}
