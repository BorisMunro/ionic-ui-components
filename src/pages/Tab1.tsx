import { IonActionSheet, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { image } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Action Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton id='open-action-sheet'>
          <IonIcon icon={image} />
          Open
        </IonButton>
        <IonActionSheet 
          trigger='open-action-sheet'
          header='Actions'
          buttons={
            [
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete'
                }
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]
          }
        />  
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
