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
import { blueLightcompany, redCompany, cP, DefaultLinkStyle } from "../../../../config/styles/common-styles";
import { StyledLink } from "../../../../config/styles/components-styles";

export const ActionCellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BugCellContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const CellSubjectContainer = styled.h5`
  cursor: pointer;
  color: ${redCompany};
  margin: 2px 0;
  &:hover{
    text-decoration: solid underline ${redCompany} 2px;
  }
`;

export const CellDescriptionContainer = styled.div`
  margin: 2px 0;
`;

export const CellDateContainer = styled.div`
  margin: 2px 0;
  font-style: italic;
`;

export const CellLink = styled(StyledLink)`
  color: ${blueLightcompany};
  margin: 5px 0;
  text-decoration: none;
  &:hover{
    text-decoration: solid underline ${blueLightcompany} 2px;
  }
`;

export const BugOptionContainer = styled.div`
  display: flex;
  min-width: 150px;
  align-items: center;
  justify-content: flex-start;
  color: ${blueLightcompany};
  cursor: pointer;
  &:hover{
    text-decoration: solid underline ${blueLightcompany} 2px;
  }
`;

export const IconContainer = styled.div`
  width: 1.2em;
  height: 1.2em;
  margin-right: 5px;
`