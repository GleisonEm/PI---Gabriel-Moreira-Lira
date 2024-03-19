import * as React from "react";
import styled from "styled-components";
import Header from "./styledcomponents/home/header";

function BegsApp() {
    return (
        <AppContainer>
            <Header />
            <Main>
                <PaymentSummary>
                    <PaymentMessage>
                        <PaymentTitle>Você está quase lá!</PaymentTitle>
                        <PaymentTotal>Total: R$ 850,00</PaymentTotal>
                    </PaymentMessage>
                    <div style={{ flex: 1, flexDirection: 'row' }}>
                        <PaymentMethods>
                            <PaymentMethod>
                                <PaymentMethodIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/84718e47635d556c120598f00c20d1d4429e6e65ce5eb31ab2a48b58ab2ef466?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Payment Method 1" />
                            </PaymentMethod>
                            <PaymentMethod>
                                <PaymentMethodIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/8349675c41074d5c1023bcd391ffb4c4b74e56e5f6b80e65441d646bbdaaf6bf?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Payment Method 2" />
                            </PaymentMethod>
                            <PaymentMethod>
                                <QRCodeImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e28233a7c81cfbbce46c140dad7cfde16c369a97053d8e323dfcc5f16c29cf?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="QR Code" />
                            </PaymentMethod>
                        </PaymentMethods>
                        <QRCodeSection>
                            <InstructionsTitle>
                                <InstructionsText>Instruções para o pagamento:</InstructionsText>
                                <InstructionsIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/073d8d0b24938cb60318ff0d63e8ad508df4e72eded953e0dcbe8c75028e382d?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Instructions Icon" />
                            </InstructionsTitle>
                            <div style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                                <QRCodeLink>Link do QR code:</QRCodeLink>
                                <QRCodeText>
                                    avidjfsidfnsodjfspdoajkdoivjsdiov.com/
                                    <br />
                                    aiofjsoidfsnjkdvnsjidnwpeoifwjkdo00020101021226910
                                    <br />
                                    014br.gov.bcb.pix2569api.developer
                                    <br />
                                    .btgpactual.com/v1/p/v2/
                                    <br />
                                    b6c1f0116**54((945d9a27cd18ebenveiru3g7
                                    <br />
                                    46gsudbcsidpackers6008CAMPINAS610813030
                                    <br />
                                    14562070503***630409C7
                                    <br />
                                    vn12432778vhsjcmn8hv37rvbius.developer.br
                                    <br />
                                    /weivjeirhg7r8hushcs9cihweuvowv
                                </QRCodeText>
                            </div>
                        </QRCodeSection>
                    </div>

                </PaymentSummary>
                <PaymentInstructions>
                    <TermsAgreement>
                        <TermsText>
                            <br />
                            <span>Eu li e concordo com o contrato de </span>
                            <TermsLink href="https://www.transtore.com.br/index.php?route=information/information/agree&information_id=11" target="_blank">
                                Termos e Políticas de Compra
                            </TermsLink>
                        </TermsText>
                        <TermsIcon src="https://geea-storage.nyc3.cdn.digitaloceanspaces.com/gabriel-freela/image%2026.png" alt="Terms Icon" />
                    </TermsAgreement>
                </PaymentInstructions>
            </Main>
        </AppContainer>
    );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 22px;
`;

const Main = styled.main`
  align-self: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  max-width: 897px;
  padding: 15px 0 50px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PaymentSummary = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 25px 0 54px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const PaymentMessage = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
  text-align: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PaymentTitle = styled.h2`
  font-family: Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PaymentTotal = styled.p`
  font-family: Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 32px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 45px;
  max-width: 100%;
  width: 461px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const PaymentMethod = styled.div`
  align-items: center;
  background-color: #73a7b8;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 3px 30px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const PaymentMethodIcon = styled.img`
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  width: 73px;
`;

const QRCodeSection = styled.section`
  align-self: end;
  display: flex;
  flex-direction: row;
  margin-top: 82px;
  max-width: 100%;
  z-index: 10;
  overflow: hidden; /* Adicionado */
`;

const PaymentInstructions = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin-top: 0; /* Ajustado */
  padding: 0 56px;
  text-align: center;
  z-index: 10;
  margin-top: 20px; /* Ajustado */
`;

const QRCodeText = styled.p`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font: 600 12px/16px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  margin-top: 9px;
  max-height: 300px;
  max-width: 400px;
  margin-left: 40px;
  padding: 35px 5px;
  text-align: center;
  white-space: nowrap;
  word-wrap: break-word; /* Adicionado */

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const QRCodeWrapper = styled.div`
  align-items: center;
  align-self: end;
  background-color: #73a7b8;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 8px 0;
  width: 133px;
`;

const QRCodeImage = styled.img`
  aspect-ratio: 1.96;
  object-fit: auto;
  object-position: center;
  width: 100%;
`;

const QRCodeLink = styled.h3`
  align-self: start;
  color: #fff;
  font: 600 24px/130% Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 21px;
  text-align: center;
`;

const InstructionsTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 130%;
  max-width: 100%;
  width: 343px;
`;

const InstructionsText = styled.h3`
  font-family: Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
`;

const InstructionsIcon = styled.img`
  aspect-ratio: 1.01;
  margin: 38px 23px 0;
  object-fit: auto;
  object-position: center;
  width: 300px;
  height: 300px;

  @media (max-width: 991px) {
    margin: 0 10px;
  }
`;

const TermsAgreement = styled.div`
  align-self: end;
  display: flex;
  font-size: 12px;
  gap: 7px;
  line-height: 16px;
  margin-top: -12px;
  z-index: 10;
`;

const TermsText = styled.p`
  flex-basis: auto;
  flex-grow: 1;
  font-family: Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  margin: auto 0;
  text-decoration-line: underline;
`;

const TermsLink = styled.a`
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
`;

const TermsIcon = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  margin-top: 10px;
  width: 22px;
  height: 22px;
`;

export default BegsApp;