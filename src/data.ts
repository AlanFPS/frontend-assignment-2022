interface CarouselData {
  title: string;
  url: string;
}

const data: CarouselData[] = [{
  title: "Mushroom",
  url: "https://images.unsplash.com/photo-1665398713005-478d88d54b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
}, {
  title: "Landscape",
  url: "https://images.unsplash.com/photo-1665338091398-c71b9704abcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
}, {
  title: "Halloween",
  url: "https://images.unsplash.com/photo-1665152658584-ae01929836ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
}, {
  title: "Donut",
  url: "https://images.unsplash.com/photo-1665344395993-2b66f768f7bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
}, {
  title: "Bridge",
  url: "https://images.unsplash.com/photo-1665354248121-69d2fdb8864f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
}];

function timer(duration: number = 500) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, duration);
  });
}

function getDataAsync() {
  console.log('getDataAsync :: called');
  return new Promise<CarouselData[]>(async resolve => {
    console.log('getDataAsync :: wait for timer is done');
    await timer(5000);
    console.log('getDataAsync :: resolve with data');
    resolve(data);
  });
}

export default getDataAsync;