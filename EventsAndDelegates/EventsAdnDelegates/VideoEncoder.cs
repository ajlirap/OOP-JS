using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventsAdnDelegates
{
    public class VideoEncoder
    {
        //1- Define a delegate
        //2- Define an event based on that delegate
        //3- Raise the event

        public delegate void VideoEncodedEventHanler(object source, EventArgs args);

        public event VideoEncodedEventHanler VideoEncoded;

        public void Encode(Video video)
        {
            Console.WriteLine("Enconding Video....");
            Thread.Sleep(3000);
            OnVideoEncoded();

        }

        //This method notified all the subscriber
        protected virtual void OnVideoEncoded() 
        {
            if (VideoEncoded != null)
                VideoEncoded(this, EventArgs.Empty);


        }
    }
}
