function Hello({ title }) {
  return <p>{title}</p>
}

export async function getServerSideProps(context) {
  return {
    props: { title: 'This is title from getServerSideProps' },
  }
}

export default Hello
