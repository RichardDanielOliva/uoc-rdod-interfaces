/*
Copyright (c) 2021, company LTD, company INC (company)
company SOFTWARE LICENSE

0. Definitions.

"License" refers the Licence Software Agreement covered by a Master Agreement and/or related Order Forms between
your organisation and company.

"You" refers to the Licensee. The licensee could be a person or a organisation.

"Source Code" refers to any copyrightable work licensed under the License.

1. The Source Code must retain the above Copyright notice, this list of conditions and the following disclaimer.
You may NOT delete, alter or obscure the copyright, trademark, or other proprietary rights notices appearing in
the Source Code.

2. You are free to make modifications to the Source Code in compliance with the License. You are also free to
compile the source after modifying it and using the compiled product obtained thereafter in compliance with the
License.

3. Except if permitted in the License, you may NOT under any circumstance copy, redistribute and/or republish the
source or a work based on it (which includes binary or object code compiled from it) in part or whole.

4. Neither the name of the Copyright holder nor the names of its contributors may be used to endorse or promote
products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import styled from "styled-components";

import { StyledLink } from "../../../config/styles/components-styles";

export const CustomTableContainer = styled.div`
  width: 100%;

  & table {
    width: 100%;
    table-layout: auto;
    text-align: left !important;
    font-size: 0.85em;
    height: 0.85em;
  }
  & .tabulated {
    td:nth-child(1) {
      padding-left: 40px;
    }
  }
  & .section {
    background-color: #ededed !important;
    td {
      padding-top: 0px;
      padding-bottom: 0px;
      font-weight: bold;
      a {
        color: #585858;
        font-size: 0.9em;
        :hover {
          text-decoration: none;
        }
      }
    } 
  }
`;

export const TableOptions = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0px;
  padding: 4px 8px 4px;
`

export const OptionIconButton = styled.button`
    position: relative;
    display: flex;
    width: 17px;
    padding-left: 1px;
    padding-top: 1px;
    border-radius: 2px;
    top: 0px;
    right: 0px;
    color: white;
    cursor: pointer;
    z-index: 0;
    border: null;

    &:hover {
      background-color: white;
    }
`;

export const RowIconButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 2px 2px;
    margin-bottom: 2px;
    top: 0px;
    right: 0px;
    width: 30px; //clamp(18px, 1.1vw, 1.1vw); 
    height: 30px; // clamp(18px, 1.1vw, 1.1vw); 
    color: black;
    cursor: pointer;
    z-index: 90;
    border: null;

    margin-left: auto;
    margin-right: auto;

    &:hover {
      background-color: white;
    }
`;

export const PageInfoContainer = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`;

export const ActionCellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CellSubjectContainer = styled.h4`
`;

export const CellDescriptionContainer = styled.div`
`;

export const CellDateContainer = styled.div`
`;

export const CellLink = styled(StyledLink)`
`;