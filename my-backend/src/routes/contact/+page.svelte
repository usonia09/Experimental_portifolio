<svelte:head>
    <title>Contact Me</title>
</svelte:head>
<h1>Contact Me</h1>

<form
  action="mailto:uwasonia2001@gmail.com"
  method="POST"
  enctype="text/plain"
>
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Subject:</label>
  <input type="text" name="subject" />
  <label>Body:</label>
  <textarea name="body" id="" cols="30" rows="10"></textarea>
  <button>Submit</button>
</form>